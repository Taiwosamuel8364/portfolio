const projects = [
  {
    id: 1,
    title: "E-Commerce REST API",
    description: "A comprehensive e-commerce backend API with user authentication, product management, shopping cart, and payment processing. Features include JWT authentication, role-based access control, and comprehensive order management.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe API", "Mongoose"],
    features: [
      "User registration and authentication",
      "Product CRUD operations",
      "Shopping cart functionality",
      "Order processing and tracking",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management"
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-api",
    liveUrl: "", // Add your live demo URL here
    image: "/images/ecommerce-api.jpg",
    status: "Completed",
    category: "Backend API"
  },
  {
    id: 2,
    title: "Social Media Backend",
    description: "A scalable social media platform backend with real-time messaging, post management, and social interactions. Implements WebSocket for real-time features and Redis for caching.",
    techStack: ["Node.js", "Express.js", "Socket.io", "MongoDB", "Redis", "Cloudinary"],
    features: [
      "User profiles and authentication",
      "Real-time messaging system",
      "Post creation, editing, and deletion",
      "Like and comment functionality",
      "Follow/unfollow users",
      "Image upload and processing"
    ],
    githubUrl: "https://github.com/yourusername/social-media-backend",
    liveUrl: "",
    image: "/images/social-media.jpg",
    status: "In Progress",
    category: "Backend API"
  },
  {
    id: 3,
    title: "Task Management API",
    description: "A robust project and task management system with team collaboration features. Includes role-based permissions, project timelines, and comprehensive reporting.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT", "Nodemailer"],
    features: [
      "Project and task creation",
      "Team member management",
      "Role-based access control",
      "Due date tracking and notifications",
      "File attachments",
      "Progress reporting and analytics"
    ],
    githubUrl: "https://github.com/yourusername/task-management-api",
    liveUrl: "https://task-manager-demo.herokuapp.com",
    image: "/images/task-manager.jpg",
    status: "Completed",
    category: "Backend API"
  },
  {
    id: 4,
    title: "Authentication Microservice",
    description: "A standalone authentication service with OAuth integration, supporting multiple authentication strategies including Google, GitHub, and traditional email/password.",
    techStack: ["Node.js", "Express.js", "Passport.js", "MongoDB", "OAuth2", "Docker"],
    features: [
      "Multiple OAuth providers",
      "JWT and session-based auth",
      "Password reset functionality",
      "Email verification",
      "Rate limiting and security",
      "Dockerized deployment"
    ],
    githubUrl: "https://github.com/yourusername/auth-microservice",
    liveUrl: "",
    image: "/images/auth-service.jpg",
    status: "Completed",
    category: "Microservice"
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A full-featured chat application with multiple rooms, file sharing, and user presence indicators. Built with Socket.io for real-time communication.",
    techStack: ["Node.js", "Express.js", "Socket.io", "MongoDB", "Multer", "JWT"],
    features: [
      "Real-time messaging",
      "Multiple chat rooms",
      "File and image sharing",
      "User online/offline status",
      "Message history",
      "Typing indicators"
    ],
    githubUrl: "https://github.com/yourusername/realtime-chat",
    liveUrl: "https://chat-app-demo.netlify.app",
    image: "/images/chat-app.jpg",
    status: "Completed",
    category: "Real-time Application"
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
