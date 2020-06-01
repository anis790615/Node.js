const fetch = require("node-fetch");

async function getNorrisJoke() {
  const url = "https://api.icndb.com/jokes/random";
  try {
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON.value.joke);
  } catch (err) {
    console.log(err);
  }
}
getNorrisJoke();
