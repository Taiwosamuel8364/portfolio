const express = require('express');
const path = require('path');
const router = express.Router();

// Resume page route
router.get('/', (req, res) => {
  res.render('resume', {
    title: 'My Resume - Samuel',
    currentPage: 'resume'
  });
});

// Resume download route
router.get('/download', (req, res) => {
  const resumePath = path.join(__dirname, '../public/downloads/Samuel_Resume.pdf');
  
  // Check if file exists and send it
  res.download(resumePath, 'Samuel_Resume.pdf', (err) => {
    if (err) {
      console.error('Resume download error:', err);
      res.status(404).render('404', {
        title: '404 - Resume Not Found',
        currentPage: '404'
      });
    }
  });
});

module.exports = router;
