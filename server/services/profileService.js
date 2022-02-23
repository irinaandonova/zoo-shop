const User = require("../models/User.js")

const getProfile = async (_id) => {
    try {
        const user = await User.findById({ _id });
        return { status: 'ok', user };
    }
    catch (err) {
        console.log(err);
        return { status: 'error' };
    }
}

const profileServcie = {
    getProfile
}

module.exports = profileServcie;