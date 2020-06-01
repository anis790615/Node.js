const fetch = require("node-fetch");

async function makeReservation() {
  const url = "https://reservation100-sandbox.mxapps.io/api/reservations";
  const reservation = {
    name: "Anis Alkomem",
    numberOfPeople: 3,
  };

  try {
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify(reservation),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // const responseJSON = await response.json(); Apparently the returned response is already aJSON

      console.log(response);
    } else {
      throw Error(response.statusText);
    }
  } catch (err) {
    console.log(err);
  }
}
makeReservation();
