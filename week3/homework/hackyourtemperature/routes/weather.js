const express = require("express");
const axios = require("axios").default;
const { API_KEY } = require("../sources/keys.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { pageTitle: "HackYourTemperature App" });
});
router.post("/weather", async (req, res) => {
  const { cityName } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const { description, icon } = response.data.weather[0];
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const { temp } = response.data.main;

    res.render("index", {
      pageTitle: "HackYourTemperature App",
      weatherData: true,
      cityName,
      description,
      iconUrl,
      temp: Math.round(temp),
    });
  } catch (e) {
    const { message } = e.response.data;
    res.render("index", {
      pageTitle: "HackYourTemperature App",
      message,
    });
  }
});

module.exports = router;
