const axios = require("axios").default;
const { API_KEY } = require("../sources/keys.json");

exports.getMainPage = (req, res) => {
  res.render("index", { pageTitle: "HackYourTemperature App" });
};
exports.postWeather = async (req, res) => {
  const { cityName } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const { description, icon } = response.data.weather[0];
    const { temp } = response.data.main;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

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
};
