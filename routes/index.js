const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res, next) => {
  try {
    let featuredProjects = [];
    
    // Try to load projects, but don't fail if it doesn't work
    try {
      const projects = require('../data/projects');
      featuredProjects = projects.slice(0, 3);
    } catch (projectError) {
      console.log('Could not load projects, using empty array');
      featuredProjects = [];
    }
    
    res.render('home', { 
      title: 'Samuel - Backend Developer',
      currentPage: 'home',
      featuredProjects: featuredProjects
    });
  } catch (error) {
    console.error('Error rendering home page:', error);
    next(error);
  }
});

module.exports = router;