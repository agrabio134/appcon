const express = require('express');
const router = express.Router();
const {createJobPost, getAllJobPosts} = require('../controllers/jobPostController');

router.get('/', getAllJobPosts);
// Create job post route
router.post('/create', createJobPost);


module.exports = router;
