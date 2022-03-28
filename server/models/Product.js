const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        required: true,
        default: 3
    },
    description: {
        type: String,

    },
    comments: {
        type: Array,
        default: [],
        minimize: false
    },
    popularity: {
        type: Number,
        default: 0
    },
    subType: {
        type: String
    }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;