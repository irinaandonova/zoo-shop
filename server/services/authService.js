const User = require('../models/User.js');

const register = async (userInfo) => {
    try {
        const user = new User(userInfo);
        await user.save();
        return user;
    }
    catch (err) {
        console.log(`Registration failure!`, err);
        return { status: 'error' };
    }

}

const authService = {
    register
}

module.exports = authService;