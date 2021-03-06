const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   user: {
       type: mongoose.Types.ObjectId,
       ref: 'User',
       required: true
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
        required:true 
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
status: {
    type: String,
    default: 'pending'
}      
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;