export async function loadTomtenQuotes() {
  const tomtenText = document.querySelector("#tomtenText");
  let quotes = [];

  try {
    const response = await fetch("./src/json/tomten.json");
    const data = await response.json();
    quotes = data.map((quote) => quote.content);
    showTomten();
  } catch (error) {
    console.log(error);
  }

  function showTomten() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    tomtenText.innerText = quotes[randomIndex];
  }

  setInterval(showTomten, 40000);
}
