const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add timeout middleware to prevent hanging requests
app.use((req, res, next) => {
  res.setTimeout(8000, () => {
    res.status(408).send('Request timeout');
  });
  next();
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes with error handling
try {
  app.use('/', require('./routes/index'));
  app.use('/about', require('./routes/about'));
  app.use('/projects', require('./routes/projects'));
  app.use('/contact', require('./routes/contact'));
  app.use('/resume', require('./routes/resume'));
} catch (error) {
  console.error('Error loading routes:', error);
}

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { 
    title: '404 - Page Not Found',
    currentPage: '404'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  
  // Check if it's development
  const isDev = process.env.NODE_ENV !== 'production';
  
  res.status(500).render('error', { 
    title: 'Server Error',
    error: isDev ? err : { message: 'Internal Server Error' },
    currentPage: 'error',
    isDev: isDev  // Pass this to the template
  });
});

// For Vercel serverless functions
module.exports = app;

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
