const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller');

router.get('/checkUser/:id/:pswd', userController.checkUser);
router.post('/addUser', userController.addUser);

module.exports = router;
