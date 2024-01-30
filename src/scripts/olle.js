export async function loadOlleQuotes() {
    const olleText = document.querySelector('#ollesText');
    let quotes = [];
  
    try {
      const response = await fetch('src/scripts/olle.json');
      const data = await response.json();
      quotes = data.map((quote) => quote.content);
      console.log(quotes);
      showOlle();
    } catch (error) {
      console.log(error);
    }
  
    function showOlle() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      olleText.innerText = quotes[randomIndex];
    }
  
    setInterval(showOlle, 40000);
  }