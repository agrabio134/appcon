const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    default: null,
  },
  lessons: [{
    title: String,
    content: String,
  }],
  image: String, // URL or file path for the course image
  duration: String, // Duration of the course
  level: String, // Difficulty level (e.g., beginner, intermediate, advanced)
  price: Number, // Course price
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
