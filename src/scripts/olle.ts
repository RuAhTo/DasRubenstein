export async function loadOlleQuotes() {
    const olleText:HTMLElement | null = document.querySelector("#ollesText");
    let quotes:string[] = [];
  
    try {
      const response = await fetch("/src/json/olle.json");
      const data:{content:string}[] = await response.json();
      quotes = data.map((quote) => quote.content);
      showOlle();
    } catch (error) {
      console.log(error);
    }
  
    function showOlle() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      if(olleText){
        olleText.innerText = quotes[randomIndex];
        }
    }
  
    setInterval(showOlle, 40000);
  }
  