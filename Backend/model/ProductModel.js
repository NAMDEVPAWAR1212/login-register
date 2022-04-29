const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: Number,
		required: true
	},
	reEnterPassword: {
		type: Number,
		required: true
	}
});

const Product = mongoose.model('loginform', productSchema);
module.exports = Product;