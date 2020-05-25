const http = require("http");
const fs = require("fs");

// create a server
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("./public/index.html", (err, content) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        // res.write(); // Sends a response back to the client
        res.end(content); // Sends and ends the response
      }
    });
  }
  if (req.url === "/script.js") {
    fs.readFile("./public/script.js", (err, content) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        // res.write(); // Sends a response back to the client
        res.end(content); // Sends and ends the response
      }
    });
  }
  if (req.url === "/style.css") {
    fs.readFile("./public/style.css", (err, content) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/css" });
        // res.write(); // Sends a response back to the client
        res.end(content); // Sends and ends the response
      }
    });
  }
});

server.listen(3000); // The server listens on port 3000
