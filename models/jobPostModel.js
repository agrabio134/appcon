const mongoose = require("mongoose");

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
    ref: "User",
    required: true,
    default: null,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
}, {timestamps: true}

);

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;
