const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;


    // Middleware to parse JSON requests
    app.use(express.json());

    // Import your routes
    const userRoutes = require('./routes/userRoutes');
    const courseRoutes = require('./routes/courseRoutes');
    const jobPostRoutes = require('./routes/jobPostRoutes');

    // Use your routes
    app.use('/api/users', userRoutes);
    app.use('/api/courses', courseRoutes);
    app.use('/api/jobposts', jobPostRoutes);

// Connect mongoose to MongoDB
mongoose
  .connect(URI)
  .then(() => {
    console.log('MongoDB connected');

        // Start the server
        app.listen(PORT, () => {
            console.log('Server running on port', PORT);
          });

  })

  
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });
