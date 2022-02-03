const router = require('express').Router();

router.post('/register', async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const town = req.body.town;
    const password = req.body.password;
    const rePassword = req.body.rePassword;
    const userInfo = { email, firstName, lastName, phoneNumber, town, address, password, rePassword }

    const user = await authService.register(userInfo);
    res.json(user);
})

module.exports = router;