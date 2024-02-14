export async function loadDodenQuotes() {
    const dodenText:HTMLElement | null = document.querySelector("#dodenText");
    let quotes:string[] = [];
  
    try {
      const response = await fetch("/src/json/doden.json");
      const data:{content:string}[] = await response.json();
      quotes = data.map((quote) => quote.content);
      showDoden();
    } catch (error) {
      console.log(error);
    }
  
    function showDoden() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      if(dodenText){
        dodenText.innerText = quotes[randomIndex];
        }
    }
  
    setInterval(showDoden, 40000);
  }
  