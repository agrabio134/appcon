const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');

// Complete course route
router.post('/course/complete', CourseController.completeCourse);

module.exports = router;
