const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions, please try again later.'
});

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');
const resumeRoutes = require('./routes/resume');

// Use routes
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectsRoutes);
app.use('/contact', contactLimiter, contactRoutes);
app.use('/resume', resumeRoutes);

// 404 Error handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Page Not Found',
    currentPage: '404'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: '500 - Server Error',
    currentPage: 'error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
