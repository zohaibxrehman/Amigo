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
	geo: {
		type: [Number],
		required: true
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
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
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

module.exports = { UserPost }