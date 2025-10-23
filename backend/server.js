import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5174;

app.use(helmet());
app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(morgan('dev'));

// Static assets passthrough (re-use existing public folder if needed)
const publicDir = path.join(__dirname, '..', 'public');
app.use('/public', express.static(publicDir));

// In-memory data adapted from existing content
const projects = [
  {
    id: 1,
    title: 'E-Commerce API',
    description:
      'A comprehensive RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, order processing, and payment integration.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe API', 'Nodemailer'],
    github: 'https://github.com/yourusername/ecommerce-api',
    live: null,
    featured: true,
    image: 'project-placeholder.jpg',
    category: 'Backend Development',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Task Management API',
    description:
      'A robust task management system API with user authentication, project collaboration, and real-time notifications. Built with Express.js and PostgreSQL.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'JWT', 'Bcrypt'],
    github: 'https://github.com/yourusername/task-management-api',
    live: 'https://your-task-api.herokuapp.com',
    featured: true,
    image: 'project-placeholder.jpg',
    category: 'Web Development',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Adorable Chat Application',
    description:
      'A chat application  backend with features like user profiles, send location, joining rooms. Includes real-time chat functionality.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Cloudinary', 'JWT'],
    github: 'https://github.com/Taiwosamuel8364/web-socket',
    live: null,
    featured: true,
    image: 'socialMedia.png',
    category: 'Backend Development',
    status: 'In Progress'
  }
];

const profile = {
  name: 'Samuel',
  role: 'Backend Developer & API Architect',
  email: 'taiwosamuel504@gmail.com',
  location: 'Ile-Ife, Nigeria',
  links: {
    github: 'https://github.com/Taiwosamuel8364',
    linkedin: 'https://linkedin.com/in/samuel-x',
    twitter: 'https://twitter.com/SamuelT83648296'
  }
};

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/profile', (_req, res) => {
  res.json(profile);
});

app.get('/api/projects', (_req, res) => {
  res.json(projects);
});

// Simple contact endpoint (no auth)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO || user;

  if (!host || !user || !pass) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const mailOptions = {
    from: `Portfolio Mailer <${user}>`,
    to,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`
  };

  transporter.sendMail(mailOptions)
    .then(() => res.json({ ok: true }))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Email error:', err);
      res.status(500).json({ error: 'Failed to send email' });
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend running on http://localhost:${PORT}`);
});


