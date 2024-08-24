const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getProfile } = require('../controller/user.controller');
const { authenticateToken } = require('../Middleware/auth.middleware');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/profile/:id', authenticateToken, getProfile);
module.exports = router;
