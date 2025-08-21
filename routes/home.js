const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Samuel - Backend Developer',
    currentPage: 'home'
  });
});

module.exports = router;
