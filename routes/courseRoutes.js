const express = require("express");
const router = express.Router();
const {
  completeCourse,
  createCourse,
  getAllCourses
} = require("../controllers/courseController");

// get all courses
router.get("/", getAllCourses);

// create course route
router.post("/create", createCourse);

// Complete course route
router.post("/complete", completeCourse);

module.exports = router;
