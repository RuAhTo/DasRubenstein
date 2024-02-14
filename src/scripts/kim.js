export async function loadKimQuotes() {
  const kimText = document.querySelector("#kimsText");
  let quotes = [];

  try {
    const response = await fetch("./DasRubenstein/src/json/kim.json");
    const data = await response.json();
    quotes = data.map((quote) => quote.content);
    showKim();
  } catch (error) {
    console.log(error);
  }

  function showKim() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    kimText.innerText = quotes[randomIndex];
  }

  setInterval(showKim, 40000);
}
