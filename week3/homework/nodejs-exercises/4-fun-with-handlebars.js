const Handlebars = require("handlebars");
// The above import is for usage in node environment. I tested it in the browser as well, for which an index page was made in the same folder and the import above should be commneted out.
function getRandomWord(array) {
  return array[Math.floor(Math.random() * 7)];
}
function drawCard() {
  const subjects = [
    "shark",
    "popcorn",
    "poison",
    "fork",
    "cherry",
    "toothbrush",
    "cannon",
  ];
  const punchlines = [
    "watch movie with",
    "spread some love",
    "put on cake",
    "clean toilets",
    "go to the moon",
    "achieve world piece",
    "help people learn programing",
  ];
  const cardData = {};
  cardData.subject = getRandomWord(subjects);
  cardData.punchline = getRandomWord(punchlines);
  const card = "<h3>{{subject}} is great to {{punchline}}</h3>";
  const template = Handlebars.compile(card);
  const result = template(cardData);
  console.log(result);
  return result;
}
// The commented out listener is for browser use as well as the returned result in the drawCard function
// window.addEventListener("load", () => {
//   document.querySelector("#card").innerHTML = drawCard();
// });
drawCard();
