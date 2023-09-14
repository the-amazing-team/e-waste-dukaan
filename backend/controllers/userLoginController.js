const UserDetails = require('../model/UserDetails');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) res.status(401).json({'meesgae': 'username and password are required'});
    
    const foundUser = await UserDetails.findOne({email}).exec();
    console.log(foundUser);
    if (!foundUser) return res.sendStatus(401); //unauthorized
    const match = bcrypt.compare(password, foundUser.password);
    if (!match) {
        res.json({'message': 'sigin successfull'});
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };