const express = require('express');
const router = express.Router();
const projects = require('../data/projects');

// Home page route
router.get('/', (req, res) => {
  try {
    // Get featured projects (first 3)
    const featuredProjects = projects.slice(0, 3);
    
    res.render('home', { 
      title: 'Samuel - Backend Developer',
      currentPage: 'home',
      featuredProjects: featuredProjects
    });
  } catch (error) {
    console.error('Error rendering home page:', error);
    res.status(500).render('error', { 
      title: 'Server Error',
      error: error,
      currentPage: 'error'
    });
  }
});

module.exports = router;