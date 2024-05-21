const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.post('/add-user',  userController.postUserData);
router.get('/get-users', userController.getUserData);
router.delete('/delete-user/:id', userController.deleteUserData);

module.exports = router;