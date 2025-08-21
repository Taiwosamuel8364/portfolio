const projects = [
  {
    id: 1,
    title: "E-Commerce API",
    description: "A comprehensive RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, order processing, and payment integration.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe API", "Nodemailer"],
    github: "https://github.com/yourusername/ecommerce-api",
    demo: null,
    featured: true,
    image: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Task Management API",
    description: "A robust task management system API with user authentication, project collaboration, and real-time notifications. Built with Express.js and PostgreSQL.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Socket.io", "JWT", "Bcrypt"],
    github: "https://github.com/yourusername/task-management-api",
    demo: "https://your-task-api.herokuapp.com",
    featured: true,
    image: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Social Media API",
    description: "A social media platform backend with features like user profiles, posts, comments, likes, and friend connections. Includes real-time chat functionality.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT"],
    github: "https://github.com/yourusername/social-media-api",
    demo: null,
    featured: true,
    image: "/images/project3.jpg"
  }
];

const skills = {
  backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "Socket.io",
    "Microservices"
  ],
  databases: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Mongoose",
    "Sequelize"
  ],
  authentication: [
    "JWT",
    "OAuth 2.0",
    "Passport.js",
    "Session Management",
    "Role-based Access Control"
  ],
  tools: [
    "Git & GitHub",
    "Docker",
    "AWS",
    "Heroku",
    "Postman",
    "VS Code"
  ],
  testing: [
    "Jest",
    "Mocha",
    "Chai",
    "Supertest",
    "Unit Testing",
    "Integration Testing"
  ]
};

module.exports = { projects, skills };
