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
    rating: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                },
                rating: {
                    type: Number,
                    required: true
                }
            }
        ]
    ,
    description: {
        type: String,

    },
    popularity: {
        type: Number,
        default: 0
    },
    comments: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            text: {
                type: String,
            },
            username: {
                type: String,
            }
              
        }
    ],
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;