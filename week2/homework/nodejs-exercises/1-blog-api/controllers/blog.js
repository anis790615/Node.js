const fs = require("fs");
const path = require("path");

// A function that checks the availbaility of the file
function isAvailableByTitle(file) {
  return fs.existsSync(path.join(__dirname, "../public", file));
}
// A function that logs out a certain response. I tried to combine both functions into one, but I failed to put a logic, because I need to return in different situations. When I file is available in createPost function, and when file is not available in update, delte and read.
function fileNotAvailable(response) {
  response.status(404);
  response.end("This post does not exist!");
}

// Combine the write file for both put and create. For other methods, different methods of file access are used.
function writeFile(res, file, fileContent, method) {
  res.status(method === "post" ? 201 : 200);
  res.setHeader("Content-Type", "application/json");
  fs.writeFileSync(path.join(__dirname, "../public", file), fileContent);
  res.end(method === "post" ? "Post Created" : "Post Updated");
}

// Show a simple h1 title on main page
exports.getMainPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
};
// Create post
exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  if (isAvailableByTitle(title)) {
    return res.end("This post already exists!");
  }
  writeFile(res, title, content, "post");
};
// Update post
exports.updatePost = (req, res, next) => {
  const { title, content } = req.body;

  if (!isAvailableByTitle(title)) {
    return fileNotAvailable(res);
  }
  writeFile(res, title, content, "put");
};
// Delete post
exports.deletePost = (req, res) => {
  const { title } = req.params;
  if (!isAvailableByTitle(title)) {
    return fileNotAvailable(res);
  }
  fs.unlinkSync(path.join(__dirname, "../public", title));
  res.end("Post Deleted");
};

// Get Post
exports.getPost = (req, res) => {
  const { title } = req.params;
  if (!isAvailableByTitle(title)) {
    return fileNotAvailable(res);
  }
  res.status(200);
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path.join(__dirname, "../public", title), (err, content) => {
    if (err) {
      return res.end(err);
    }
    res.end(content);
  });
};
