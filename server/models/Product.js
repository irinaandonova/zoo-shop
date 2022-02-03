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
        required:true,
        default: 3
    },
    description: {
        type: String,
    
    },
    comments: {
        type: Array
    },
    popularity: {
        type:Number,
        default: 0
    }
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;