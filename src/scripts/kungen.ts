export async function loadKungenQuotes() {
    const kungenText: HTMLElement | null = document.querySelector("#kungenText");
    let quotes: string[] = [];

    try {
        const response = await fetch("/src/json/kungen.json");
        const data: { content: string }[] = await response.json();
        quotes = data.map((quote) => quote.content);
        showKungen();
    } catch (error) {
        console.log(error);
    }

    function showKungen() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        if (kungenText) {
            kungenText.innerText = quotes[randomIndex];
        }
    }

    setInterval(showKungen, 40000);
}