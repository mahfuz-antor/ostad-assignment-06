const express = require("express");

const router = express.Router();

// Blog Controllers
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require("../Controllers/blogController");

// Blog Details Controllers
const {
  create: createBlogDetails,
  read: readBlogDetails,
  delete: deleteBlogDetails,
  update: updateBlogDetails,
} = require("../Controllers/blogDetailsController");

// Comment Controllers
const {
  create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
} = require("../Controllers/commentController");

// Message Controllers
const {
  create: createMessage,
  read: readMessage,
  delete: deleteMessage,
  update: updateMessage,
} = require("../Controllers/messageController");

// Portfolio Controllers
const {
  create: createPortfolio,
  read: readPortfolio,
  delete: deletePortfolio,
  update: updatePortfolio,
} = require("../Controllers/portfolioController");

// Product Controllers
const {
  create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
} = require("../Controllers/productController");

// Profit Controllers
const {
  create: createProfit,
  read: readProfit,
  delete: deleteProfit,
  update: updateProfit,
} = require("../Controllers/profitController");

// Project Controllers
const {
  create: createProject,
  read: readProject,
  delete: deleteProject,
  update: updateProject,
} = require("../Controllers/projectController");

// Service Controllers
const {
  create: createService,
  read: readService,
  delete: deleteService,
  update: updateService,
} = require("../Controllers/serviceController");

// Title Controllers
const {
  create: createTitle,
  read: readTitle,
  delete: deleteTitle,
  update: updateTitle,
} = require("../Controllers/titleController");

// Blog Routers
router.get("/createBlog", createBlog);
router.get("/readBlog", readBlog);
router.get("/deleteBlog", deleteBlog);
router.get("/updateBlog", updateBlog);

// Blog Details Routers
router.get("/createBlogDetails", createBlogDetails);
router.get("/readBlogDetails", readBlogDetails);
router.get("/deleteBlogDetails", deleteBlogDetails);
router.get("/updateBlogDetails", updateBlogDetails);

// Comment Routers
router.get("/createComment", createComment);
router.get("/readComment", readComment);
router.get("/deleteComment", deleteComment);
router.get("/updateComment", updateComment);

// Message Routers
router.get("/createMessage", createMessage);
router.get("/readMessage", readMessage);
router.get("/deleteMessage", deleteMessage);
router.get("/updateMessage", updateMessage);

// Portfolio Routers
router.get("/createPortfolio", createPortfolio);
router.get("/readPortfolio", readPortfolio);
router.get("/deletePortfolio", deletePortfolio);
router.get("/updatePortfolio", updatePortfolio);

// Product Routers
router.get("/createProduct", createProduct);
router.get("/readProduct", readProduct);
router.get("/deleteProduct", deleteProduct);
router.get("/updateProduct", updateProduct);

// Profit Routers
router.get("/createProfit", createProfit);
router.get("/readProfit", readProfit);
router.get("/deleteProfit", deleteProfit);
router.get("/updateProfit", updateProfit);

// Project Routers
router.get("/createProject", createProject);
router.get("/readProject", readProject);
router.get("/deleteProject", deleteProject);
router.get("/updateProject", updateProject);

// Service Routers
router.get("/createService", createService);
router.get("/readService", readService);
router.get("/deleteService", deleteService);
router.get("/updateService", updateService);

// Title Routers
router.get("/createTitle", createTitle);
router.get("/readTitle", readTitle);
router.get("/deleteTitle", deleteTitle);
router.get("/updateTitle", updateTitle);

module.exports = router;
