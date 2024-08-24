const express = require('express');
const { addMessage, getMessages } = require('../controller/message.controller');
const router = express.Router();

router.post('/addmessage', addMessage);

router.get('/messages', getMessages);

module.exports = router;
