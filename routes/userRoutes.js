const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.send('Hello world');
});
// User registration route
router.post('/register', UserController.register);

// User login route
router.post('/login', UserController.login);

// Get user data route
router.get('/user/:userId', UserController.getUserData);

module.exports = router;
