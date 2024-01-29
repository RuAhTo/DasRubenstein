import axios from "axios";
import mockData from "../mockData.json";

document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault(); // Förhindrar att sidan laddas om
    fetchNews();
});

function fetchTopNews() {
    console.log("Visar toppnyheter!");
    const data = mockData.results;

    const topNewsData = data.filter(article => {
        // Kontrollera om artikeln har kategorin 'top'
        return article.category ||  article.category.includes('top');
    });

    const newsDiv = document.getElementById('newsItem');
    if (topNewsData.length > 0) {
        newsDiv.innerHTML = topNewsData.map(article => {
            return `<div class="news-article">
                        <img src='${article.image_url}'>
                        <h1><a href="${article.link}" target="_blank">${article.title}</a></h1>
                        <p>${article.description}</p>
                    </div>`;
        }).join("");
    } else {
        newsDiv.innerHTML = "<p>Inga nyheter i kategorin 'top'.</p>";
    }
}



export {fetchNews}
