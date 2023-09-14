const express = require('express');
const { handleLogin } = require('../controllers/userLoginController');

const router = express.Router();

router.post('/', handleLogin);

module.exports = router;