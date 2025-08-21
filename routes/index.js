const express = require('express');
const router = express.Router();

// Test route to check if EJS works
router.get('/test', (req, res) => {
  console.log('Test route called');
  try {
    res.render('test', {
      title: 'Test Page',
      currentPage: 'test'
    });
  } catch (error) {
    console.error('Test route error:', error);
    res.send('Test route failed: ' + error.message);
  }
});

// Simple home test
router.get('/home-simple', (req, res) => {
  console.log('Simple home route called');
  try {
    let featuredProjects = [];
    
    try {
      const projects = require('../data/projects');
      featuredProjects = projects.slice(0, 3);
    } catch (projectError) {
      console.log('Could not load projects, using empty array');
      featuredProjects = [];
    }
    
    res.render('home-simple', { 
      title: 'Samuel - Backend Developer',
      currentPage: 'home',
      featuredProjects: featuredProjects
    });
  } catch (error) {
    console.error('Error rendering simple home page:', error);
    res.send('Simple home failed: ' + error.message);
  }
});

// Home page route
router.get('/', (req, res, next) => {
  console.log('Home route called');
  try {
    let featuredProjects = [];
    
    // Try to load projects, but don't fail if it doesn't work
    try {
      const projects = require('../data/projects');
      console.log('Projects loaded:', projects.length);
      featuredProjects = projects.slice(0, 3);
      console.log('Featured projects:', featuredProjects.length);
    } catch (projectError) {
      console.log('Could not load projects, using empty array');
      featuredProjects = [];
    }
    
    console.log('About to render home template');
    res.render('home', { 
      title: 'Samuel - Backend Developer',
      currentPage: 'home',
      featuredProjects: featuredProjects
    });
    console.log('Home template rendered successfully');
  } catch (error) {
    console.error('Error rendering home page:', error);
    next(error);
  }
});

module.exports = router;