const express = require('express');
const router = express.Router();
const { skills } = require('../data/projects');

// About page route
router.get('/', (req, res) => {
  res.render('about', {
    title: 'About Me - Samuel',
    currentPage: 'about',
    skills: skills
  });
});

module.exports = router;
