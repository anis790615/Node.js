const express = require("express");
const hbs = require("express-handlebars");

// Initialize app
const app = express();

// Import the routes
const weatherRoutes = require("./routes/weather");

// Initialise handlebars engine
app.engine("hbs", hbs({ defaultLayout: "main-layout", extname: "hbs" }));
app.set("view engine", "hbs");

// Use express parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use(weatherRoutes);

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
