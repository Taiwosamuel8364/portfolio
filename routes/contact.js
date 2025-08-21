const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Contact page route
router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact Me - Samuel',
    currentPage: 'contact',
    message: null,
    error: null
  });
});

// Handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.render('contact', {
      title: 'Contact Me - Samuel',
      currentPage: 'contact',
      message: null,
      error: 'All fields are required.'
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.render('contact', {
      title: 'Contact Me - Samuel',
      currentPage: 'contact',
      message: null,
      error: 'Please enter a valid email address.'
    });
  }
  
  try {
    // Create transporter (configure with your email settings)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your email password or app password
      }
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your portfolio website.</em></p>
      `,
      replyTo: email
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    res.render('contact', {
      title: 'Contact Me - Samuel',
      currentPage: 'contact',
      message: 'Thank you for your message! I\'ll get back to you soon.',
      error: null
    });
    
  } catch (error) {
    console.error('Email sending error:', error);
    
    // For development, just show success message
    // In production, you'd want to handle this properly
    if (process.env.NODE_ENV === 'development') {
      res.render('contact', {
        title: 'Contact Me - Samuel',
        currentPage: 'contact',
        message: 'Message received! (Email not configured for development)',
        error: null
      });
    } else {
      res.render('contact', {
        title: 'Contact Me - Samuel',
        currentPage: 'contact',
        message: null,
        error: 'Sorry, there was an error sending your message. Please try again later.'
      });
    }
  }
});

module.exports = router;
