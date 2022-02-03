const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true 
    },
    password: {
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
    },
    town: {
        type: String,
        required: true  
    },
    
})


const User = new mongoose.model('User', userSchema);

module.exports = User;