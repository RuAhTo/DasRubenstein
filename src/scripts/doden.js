export async function loadDodenQuotes() {
  const dodenText = document.querySelector("#dodenText");
  let quotes = [];

  try {
    const response = await fetch("/src/json/doden.json");
    const data = await response.json();
    quotes = data.map((quote) => quote.content);
    showDoden();
  } catch (error) {
    console.log(error);
  }

  function showDoden() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    dodenText.innerText = quotes[randomIndex];
  }

  setInterval(showDoden, 40000);
}
