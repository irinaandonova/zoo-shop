const bcrypt = require('bcrypt');

const hashPassword = async (password, SALT) => {
    try {
        let hashedPassword = await bcrypt.hash(password, SALT);

        return hashedPassword;
    }
    catch (err) {
        console.log(err);
    }
}

const comparePassword = async (password, hashedPassword) => {
    try {
        let result = await bcrypt.compare(password, hashedPassword);

        return result;
    }
    catch (err) {
        console.log(err);
    }
}

const authMiddleware = {
    hashPassword,
    comparePassword
}

module.exports = authMiddleware;
