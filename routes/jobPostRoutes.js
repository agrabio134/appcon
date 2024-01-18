const express = require('express');
const router = express.Router();
const JobPostController = require('../controllers/jobPostController');

// Create job post route
router.post('/jobpost/create', JobPostController.createJobPost);

module.exports = router;
