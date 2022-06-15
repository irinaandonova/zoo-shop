const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const SECRET = '1376E6C33989144E433CAC15D747C';

const register = async ({ email, firstName, lastName, username, phoneNumber, town, address, password, rePassword }) => {
    try {
        const user = new User({ email, firstName, lastName, phoneNumber, town, username, address, password, rePassword });
        await user.save();
        
        return { status: 'ok', user };
    }
    catch (err) {
        if(err.code === 11000) {
            return { status: 'err', message: 'Duplicate keys', value: err.keyValue }
        }
        return { status: 'error' };
    }
}

const login = async ({ username, password }) => {
    try {
        const user = await User.findOne({ username });
        if (user.password === password) {
            return { status: 'ok', user }
        }
        else {
            return { status: 'err', token: false };
        }
    }
    catch (err) {
        console.log(err);
        return { status: 'error' };
    }
}

const editProfile = async ( {_id, user} ) => {
    try {
        const userInfo = await User.updateOne({ _id }, { town: user.town, address: user.address, phoneNumber: user.phoneNumber });
        return { status: 'ok' }
    }
    catch (err) {
        console.log(err);
        return { status: 'err' }
    }
}

const authService = {
    register,
    login,
    editProfile
}

module.exports = authService;