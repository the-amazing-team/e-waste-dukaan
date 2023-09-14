const express = require('express');
const { handleNewUser } = require('../controllers/userRegisterController');

const router = express.Router();

router.post('/', handleNewUser);

module.exports = router;
