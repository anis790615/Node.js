const fetch = require("node-fetch");

async function getBooks() {
  const url = "https://restapiabasicauthe-sandbox.mxapps.io/api/books";
  try {
    const response = await fetch(url, {
      headers: { Authorization: "Basic YWRtaW46aHZnWDhLbFZFYQ==" },
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
  } catch (error) {
    console.log(error);
  }
}
getBooks();
