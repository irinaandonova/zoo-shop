const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    },
    cartItems: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            productName: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number, default: 1
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    paymentMethod: {
        type: String,
        required: true
    }
}, { timestamps: true });

const order = mongoose.model('order', orderSchema);

module.exports = order;