const projects = [
  {
    id: 1,
    title: "E-Commerce API",
    description: "A comprehensive RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, order processing, and payment integration.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe API", "Nodemailer"],
    githubUrl: "https://github.com/yourusername/ecommerce-api",
    liveUrl: null,
    featured: true,
    image: "/images/project-placeholder.jpg",
    category: "Backend Development",
    status: "Completed"
  },
  {
    id: 2,
    title: "Task Management API",
    description: "A robust task management system API with user authentication, project collaboration, and real-time notifications. Built with Express.js and PostgreSQL.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Socket.io", "JWT", "Bcrypt"],
    githubUrl: "https://github.com/yourusername/task-management-api",
    liveUrl: "https://your-task-api.herokuapp.com",
    featured: true,
    image: "/images/project-placeholder.jpg",
    category: "Web Development",
    status: "Completed"
  },
  {
    id: 3,
    title: "Social Media API",
    description: "A social media platform backend with features like user profiles, posts, comments, likes, and friend connections. Includes real-time chat functionality.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT"],
    githubUrl: "https://github.com/yourusername/social-media-api",
    liveUrl: null,
    featured: true,
    image: "/images/project-placeholder.jpg",
    category: "Backend Development",
    status: "In Progress"
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
