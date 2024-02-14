export async function loadTomtenQuotes() {
    const tomtenText:HTMLElement | null = document.querySelector("#tomtenText");
    let quotes:string[] = [];
  
    try {
      const response = await fetch("/src/json/tomten.json");
      const data:{content:string}[] = await response.json();
      quotes = data.map((quote) => quote.content);
      showTomten();
    } catch (error) {
      console.log(error);
    }
  
    function showTomten() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      if(tomtenText){
      tomtenText.innerText = quotes[randomIndex];
      }
    }
  
    setInterval(showTomten, 40000);
  }
  