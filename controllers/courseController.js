const Course = require('../models/courseModel');

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(200).json({ course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating course' });
  } 
}

const getAllCourses = async (req, res) => {
  // Retrieve all courses from the database
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching courses' });
  }
};



const completeCourse = async (req, res) => {
  // Handle course completion logic, update user's completed courses
  try {
    const course = await Course.findById(req.body.courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json({ message: 'Course completed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error completing course' });
  }
};


module.exports = { completeCourse, createCourse, getAllCourses };
