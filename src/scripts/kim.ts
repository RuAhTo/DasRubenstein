export async function loadKimQuotes() {
    const kimText:HTMLElement | null = document.querySelector("#kimsText");
    let quotes:string[] = [];
  
    try {
        const response = await fetch("/src/json/kim.json");
        const data: { content: string }[] = await response.json();
        quotes = data.map((quote) => quote.content);
        showKim();
    } catch (error) {
        console.log(error);
    }

    function showKim() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        if (kimText){
            kimText.innerText = quotes[randomIndex];
            }
    }
  
    setInterval(showKim, 40000);
  }
  