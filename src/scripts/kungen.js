export async function loadKungenQuotes() {
  const kungenText = document.querySelector("#kungenText");
  let quotes = [];

  try {
    const response = await fetch("./src/json/kungen.json");
    const data = await response.json();
    quotes = data.map((quote) => quote.content);
    console.log(quotes);
    showKungen();
  } catch (error) {
    console.log(error);
  }

  function showKungen() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    kungenText.innerText = quotes[randomIndex];
  }

  setInterval(showKungen, 40000);
}
