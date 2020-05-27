const express = require("express");

const app = express();
app.use(express.json());
const blogRoutes = require("./routes/blogs");

app.use(blogRoutes);

app.listen(3000);
