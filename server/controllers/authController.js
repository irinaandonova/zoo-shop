const router = require('express').Router();
const User = require('../models/User.js');
const authService = require('../services/authService.js');

router.post('/register', async (req, res) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const town = req.body.town;
    const password = req.body.password;
    const rePassword = req.body.rePassword;

    const user = await authService.register({ email, firstName, lastName, phoneNumber, town, address, password, rePassword });
    res.json({ status: user.status });
})

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const result = await authService.login({ email, password });
        console.log(result)
        res.json({ status: result.status, user: result.user, token: result.token });
    }
    catch (err) {
        console.log(err);
        return { status: 'error' };
    }
})

router.post('/:_id', async(req, res) => {
    const _id = req.params._id;
    const user = req.body;
    try {
        const result  = await authService.editProfile({_id, user});
        if(result.status === 'ok') {
            res.json({  status: 'ok' });
        }
    }
    catch(err) {
        console.log(err);
        res.json({status: 'error'});
    }
}) 
module.exports = router;