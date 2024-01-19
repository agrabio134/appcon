const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  achievements: [
    {
      title: String,
      description: String,
      dateEarned: {
        type: Date,
        default: Date.now,
      },
      default: [],
    },
  ],
  coursesCompleted: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      completionDate: {
        type: Date,
        default: null,
      },
    },
  ],
  badges: [
    {
      title: String,
      description: String,
      default: [],
    },
  ],
  jobPosts: [
    {
      title: String,
      description: String,
      skills: [String],
      datePosted: {
        type: Date,
        default: Date.now,
      },
      image: String, // URL or file path for the job post image
      company: String, // Name of the hiring company
      location: String, // Job location
      salary: String, // Expected salary or salary range
      contactEmail: String, // Contact email for applicants
    },
  ],
  default: [],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
