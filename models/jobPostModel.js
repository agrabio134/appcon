const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skillsRequired: [String],
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  image: String, // URL or file path for the job post image
  company: String, // Name of the hiring company
  location: String, // Job location
  salary: String, // Expected salary or salary range
  contactEmail: String, // Contact email for applicants
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
