const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const likeController = require('./controllers/likeController');
const dislikeController = require('./controllers/dislikeController');
const messageController = require('./controllers/messageController');

router.get('/user/available', userController.index);
router.post('/user/new', userController.store);
router.post('/user/:devId/like', likeController.store);
router.post('/user/:devId/dislike', dislikeController.store);
router.get('/match/messages/:devId', messageController.index);
router.post('/match/message/send', messageController.store);

module.exports = router;