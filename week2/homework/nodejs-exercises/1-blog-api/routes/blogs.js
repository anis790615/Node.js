const express = require("express");

const router = express.Router();
// I decided to try out the mvc model, and although I don't have models, I moved all function to a controller folder, and exported their functions here
const blogController = require("../controllers/blog");

// SHow index.html
router.get("/", blogController.getMainPage);
// Create post
router.post("/blogs", blogController.createPost);
// Update post
router.put("/blogs", blogController.updatePost);
// Delete post
router.delete("/blogs/:title", blogController.deletePost);
// Read Post
router.get("/blogs/:title", blogController.getPost);

module.exports = router;
