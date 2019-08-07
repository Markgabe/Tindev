const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const likeController = require('./controllers/likeController');
const dislikeController = require('./controllers/dislikeController');

router.get('/user/available', userController.index);
router.post('/user/new', userController.store);
router.post('/user/:devId/like', likeController.store);
router.post('/user/:devId/dislike', dislikeController.store);

module.exports = router;