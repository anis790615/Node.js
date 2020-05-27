const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const app = express();

// SHow index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
// Create post
router.post("/blogs", (req, res) => {
  const { title } = req.body;
  const { content } = req.body;
  if (fs.existsSync(path.join(__dirname, "../public", title))) {
    return res.end("This post already exists!");
  }
  res.status(201);
  res.setHeader("Content-Type", "application/json");
  fs.writeFileSync(path.join(__dirname, "../public", title), content);
  res.end("Post Created");
});
// Update post
router.put("/blogs", (req, res) => {
  const { title } = req.body;
  const { content } = req.body;
  if (!fs.existsSync(path.join(__dirname, "../public", title))) {
    res.status(404);
    return res.end("This post does not exist!");
  }
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  fs.writeFileSync(path.join(__dirname, "../public", title), content);
  res.end("Post Updated");
});
// Delete post
router.delete("/blogs/:title", (req, res) => {
  if (!fs.existsSync(path.join(__dirname, "../public", req.params.title))) {
    res.status(404);
    return res.end("This post does not exist!");
  }
  fs.unlinkSync(path.join(__dirname, "../public", req.params.title));
  res.end("Post Deleted");
});
// Read Post
router.get("/blogs/:title", (req, res) => {
  const { title } = req.params;
  if (!fs.existsSync(path.join(__dirname, "../public", title))) {
    res.status(404);
    return res.end("This post does not exist!");
  }
  res.status(200);
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path.join(__dirname, "../public", title), (err, content) => {
    if (err) {
      return res.end(err);
    }
    res.end(content);
  });
});

module.exports = router;
path.join(__dirname, "posts");
