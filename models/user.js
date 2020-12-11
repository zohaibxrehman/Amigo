/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
		required: true,
		minlength: 1,
		trim: true,
    },
    lastName: {
        type: String,
		required: true,
		minlength: 1,
		trim: true,
    },
    username: {
        type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: (username) => !validator.equals(username, "admin")
		}
    },
    phone: {
        type: String,
		default: '(XXX)-XXX-XXXX',
		minlength: 5,
		trim: true
    },
    location: {
        type: String,
		default: 'Canada',
		minlength: 1,
		trim: true
    },
	email: {
		type: String,
		required: true,
		minlength: 3,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,   // custom validator
			message: 'Not valid email'
		}
    }, 
    aboutMe: {
        type: String,
		default: `Hi, I\'m an Amigo! I\'m actively searching for a roommate. Feel free to contact me by my email or phone.`,
		trim: true
    },
	password: {
		type: String,
		required: true,
		minlength: 2
    },
    posts: {
		type: [mongoose.Schema.Types.ObjectId],
		required: false
	},
	flagged: {
		type: Boolean,
		default: false
	},
	image_id: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    created_at: String
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByUserPassword = function(username, password) {
	const User = this // binds this to the User model

	return User.findOne({ username: username }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }
