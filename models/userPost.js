const mongoose = require('mongoose')

const UserPost = mongoose.model('UserPost', {
	title: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	location: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	price: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	preferences: {
		type: [String],
		required: true
	},
	description: {
		type: String,
		required: true,
		minlength: 1
	},
	year: {
		type: Number,
		required: true,
		// default: 1
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
})

module.exports = { UserPost }