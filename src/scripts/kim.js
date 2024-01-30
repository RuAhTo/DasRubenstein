export async function loadKimQuotes() {
  const kimText = document.querySelector('#kimsText');
  let quotes = [];

  try {
    const response = await fetch('src/scripts/kim.json');
    const data = await response.json();
    quotes = data.map((quote) => quote.content);
    console.log(quotes);
    showKim();
  } catch (error) {
    console.log(error);
  }

  function showKim() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    kimText.innerText = quotes[randomIndex];
  }

  setInterval(showKim, 20000);
}


