const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserData,
  getAllUsers,
} = require('../controllers/userController');

// get all users
router.get('/', getAllUsers); 

// Get user data route
router.get('/:userId', getUserData);

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);


module.exports = router;
