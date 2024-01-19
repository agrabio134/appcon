const User = require('../models/userModel');

const registerUser = async (req, res) => {
  // Handle user registration logic, create a new user in the database
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user' });
  }
};

const getAllUsers = async (req, res) => {
  // Retrieve all users from the database
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching users' });
  }
};

const loginUser = async (req, res) => {

  try {

    res.status(200).json({ token: 'example_token' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error logging in' });
  }
};

const getUserData = async (req, res) => {
  // Retrieve user data based on user ID
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
};

module.exports = { registerUser, loginUser, getUserData, getAllUsers };
