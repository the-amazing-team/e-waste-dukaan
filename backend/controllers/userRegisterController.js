const UserDetails = require('../model/UserDetails');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    console.log(req.body);
    const { fullName, state, city, email, mobile, password }=  req.body;
    if(!fullName || !state || !city || !email || !mobile || !password) return res.status(400).json({'message': 'Please fill all the fields'});
    const duplicate = await UserDetails.findOne({email}).exec();
    if (duplicate) return res.sendStatus(409);
    try {
        const hashedPwd = await bcrypt.hash(password, 10);
        const result = await UserDetails.create({fullName, state, city, email, mobile, "password": hashedPwd});
        console.log(result);
        res.status(201).json({'success': `new user ${fullName} created`});
    }catch (err) {
        console.log(err);
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleNewUser};
