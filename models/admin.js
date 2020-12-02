/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true
    },
	password: {
		type: String,
		required: true,
		minlength: 1
    }
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
AdminSchema.pre('save', function(next) {
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
AdminSchema.statics.findByUserPassword = function(username, password) {
	const Admin = this // binds this to the User model

	return Admin.findOne({ username: username }).then((user) => {
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
const Admin = mongoose.model('Admin', AdminSchema)
module.exports = { Admin }
