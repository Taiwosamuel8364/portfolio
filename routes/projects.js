const express = require('express');
const router = express.Router();
const { projects } = require('../data/projects');

// Projects page route
router.get('/', (req, res) => {
  const category = req.query.category;
  let filteredProjects = projects;
  
  if (category && category !== 'all') {
    filteredProjects = projects.filter(project => 
      project.category.toLowerCase().includes(category.toLowerCase())
    );
  }
  
  // Get unique categories for filter buttons
  const categories = [...new Set(projects.map(project => project.category))];
  
  res.render('projects', {
    title: 'My Projects - Samuel',
    currentPage: 'projects',
    projects: filteredProjects,
    categories: categories,
    selectedCategory: category || 'all'
  });
});

// Individual project route
router.get('/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).render('404', {
      title: '404 - Project Not Found',
      currentPage: '404'
    });
  }
  
  res.render('project-detail', {
    title: `${project.title} - Samuel`,
    currentPage: 'projects',
    project: project
  });
});

module.exports = router;
