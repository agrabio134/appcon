const JobPost = require('../models/jobPostModel');


const createJobPost = async (req, res) => {
  try { 
    const jobPost = await JobPost.create(req.body);
    res.status(200).json({ jobPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating job post' });
  }
};

const getAllJobPosts = async (req, res) => {
  // Retrieve all courses from the database
  try {
    const jobPosts = await JobPost.find();
    res.status(200).json(jobPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching job posts' });
  }
}

module.exports = { createJobPost, getAllJobPosts };
