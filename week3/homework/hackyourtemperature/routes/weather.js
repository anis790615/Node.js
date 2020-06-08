const express = require("express");
const weatherController = require("../controllers/weatherController");

const router = express.Router();

router.get("/", weatherController.getMainPage);
router.post("/weather", weatherController.postWeather);

module.exports = router;
