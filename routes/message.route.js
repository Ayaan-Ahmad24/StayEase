const express = require('express');
const { createMessage, getMessages } = require('../controller/message.controller');
const router = express.Router();

router.post('/addmessage', createMessage);

router.get('/messages', getMessages);

module.exports = router;
