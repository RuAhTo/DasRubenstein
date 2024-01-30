import axios from "axios";
import mockData from "../mockData.json";

document.getElementById('toppNyheter').addEventListener('click', function(event) {
    fetchTopNews();
});

document.getElementById('politik').addEventListener('click', function(event){
    fetchPoliticNews();
});

document.getElementById('datum').addEventListener('click', function(event){
    fetchDate();
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const sökOrd = document.getElementById('search').value; // Capture the search term
            fetchSearch(sökOrd); // Pass it to fetchSearch function
        }
    });
});
function fetchSearch(sökOrd) {
    console.log("Searching for:", sökOrd);
    const data = mockData.results; // Use your actual data source
    const lowerCaseSearchTerm = sökOrd.toLowerCase();
    const newsDiv = document.getElementById('newsItem');
    newsDiv.innerHTML = data
        .filter(article => {
            const title = article.title.toLowerCase();
            const description = article.description.toLowerCase();
            // Ensure keywords is not null before calling map
            const keywords = article.keywords ? article.keywords.map(keyword => keyword.toLowerCase()) : [];
            return title.includes(lowerCaseSearchTerm) ||
                   description.includes(lowerCaseSearchTerm) ||
                   keywords.some(keyword => keyword.includes(lowerCaseSearchTerm));
        })
        .map(article => {
            return `<img src='${article.image_url}'>
                    <h1>${article.title}</h1>
                    <p>${article.description}</p>`;
        })
        .join("");
}


// Initial fetch to display some news
export {fetchSearch}




function fetchDate() {
    console.log("Nu kom det in MOCKDATA!");
    const data = mockData.results;
    const newsDiv = document.getElementById('newsItem');
    newsDiv.innerHTML = data
    .sort((a, b) => {
        const dateA = new Date(a.pubDate);
        const dateB = new Date(b.pubDate);
        return dateB - dateA;
    })
    .map(article => {
        // Process the articles
        return {
            imageUrl: article.image_url,
            title: article.title,
            description: article.description,
        };
    })
    .map(article => {
        // Convert processed articles into HTML strings
        return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    })  
    .join(""); // Combine all article strings into a single HTML string
}


export {fetchDate}






function fetchPoliticNews() {
    console.log("Nu kom det in MOCKDATA!");
    const data = mockData.results;
    const newsDiv = document.getElementById('newsItem');
    newsDiv.innerHTML = data
    .filter(article => {
        // Filter articles based on a condition. 
        // For example, only show articles with a certain word in the title:
        return article.category.includes('politics');
    })
    .map(article => {
        // Process the articles
        return {
            imageUrl: article.image_url,
            title: article.title,
            description: article.description,
        };
    })
    .map(article => {
        // Convert processed articles into HTML strings
        return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    })  
    .join(""); // Combine all article strings into a single HTML string
}


export {fetchPoliticNews}

function fetchTopNews() {
    console.log("Nu kom det in MOCKDATA!");
    const data = mockData.results;
    const newsDiv = document.getElementById('newsItem');
    newsDiv.innerHTML = data
    .filter(article => {
        // Filter articles based on a condition. 
        // For example, only show articles with a certain word in the title:
        return article.category.includes('top');
    })
    .map(article => {
        // Process the articles
        return {
            imageUrl: article.image_url,
            title: article.title,
            description: article.description,
        };
    })
    .map(article => {
        // Convert processed articles into HTML strings
        return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    })  
    .join(""); // Combine all article strings into a single HTML string
}


export {fetchTopNews}








function fetchNews() {
    console.log("Nu kom det in MOCKDATA!");
    const data = mockData.results;
    const newsDiv = document.getElementById('newsItem');
    newsDiv.innerHTML = data.map(article => {
        return `<img src='${article.image_url}' style='max-width: 600px;'>
                <h1>${article.title}</h1> 
                <p>${article.description}</p>`;
    }).join("");
}

fetchNews();

export {fetchNews}