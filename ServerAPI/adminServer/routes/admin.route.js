const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin.controller');

router.get('/checkUser/:id/:pswd', adminController.checkUser);
router.post('/addUser', adminController.addUser);

module.exports = router;
