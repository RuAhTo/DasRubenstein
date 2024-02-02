import axios from "axios";
import mockData from "../json/mockData.json";

const newsDiv = document.querySelector(".news-articles");

document
  .getElementById("toppNyheter")
  .addEventListener("click", function (event) {
    fetchTopNews();
    fetchTopNewsReal();
  });

document.getElementById("politik").addEventListener("click", function (event) {
  fetchPoliticNews();
});

document.getElementById("datum").addEventListener("click", function (event) {
  fetchDate();
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      fetchSearch(event.target.value); // Directly pass the search term
    }
  });
});

function fetchSearch(searchTerm) {
  console.log("Searching for:", searchTerm);
  const data = mockData.results; // Use your actual data source
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  newsDiv.innerHTML = data
    .filter(({ title, description, keywords }) => {
      const titleLower = title?.toLowerCase() || "";
      const descriptionLower = description?.toLowerCase() || "";
      const keywordsLower =
        keywords?.map((keyword) => keyword?.toLowerCase()) || [];
      return [titleLower, descriptionLower, ...keywordsLower].some((text) =>
        text.includes(lowerCaseSearchTerm)
      );
    })
    .map(
      ({ title, description, image_url }) =>
        `<img src='${image_url}' style='max-width: 600px;'>
             <h1>${title}</h1>
             <p>${description}</p>`
    )
    .join("");
}

// Initial fetch to display some news
export { fetchSearch };

function fetchDate() {
  console.log("Nu kom det in MOCKDATA!");
  const data = mockData.results;
  newsDiv.innerHTML = data
    .sort((a, b) => {
      const dateA = new Date(a.pubDate);
      const dateB = new Date(b.pubDate);
      return dateB - dateA;
    })
    .map((article) => {
      // Process the articles
      return {
        imageUrl: article.image_url,
        title: article.title,
        description: article.description,
      };
    })
    .map((article) => {
      // Convert processed articles into HTML strings
      return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    })
    .join(""); // Combine all article strings into a single HTML string
}

export { fetchDate };

function fetchPoliticNews() {
  console.log("Nu kom det in MOCKDATA!");
  const data = mockData.results;
  newsDiv.innerHTML = data
    .filter((article) => {
      // Filter articles based on a condition.
      // For example, only show articles with a certain word in the title:
      return article.category.includes("politics");
    })
    .map((article) => {
      // Process the articles
      return {
        imageUrl: article.image_url,
        title: article.title,
        description: article.description,
      };
    })
    .map((article) => {
      // Convert processed articles into HTML strings
      return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    })
    .join(""); // Combine all article strings into a single HTML string
}

export { fetchPoliticNews };

function fetchTopNews() {
  console.log("Nu kom det in MOCKDATA!");
  const data = mockData.results;
  newsDiv.innerHTML = data
    .filter((article) => {
      // Filter articles based on a condition.
      // For example, only show articles with a certain word in the title:
      return article.category.includes("top");
    })
    .map((article) => {
      // Process the articles
      return {
        imageUrl: article.image_url,
        title: article.title,
        description: article.description,
      };
    })
    .map((article) => {
      // Convert processed articles into HTML strings
      return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    })
    .join(""); // Combine all article strings into a single HTML string
}

export { fetchTopNews };

function fetchNews() {
  /* console.log("Nu kom det in MOCKDATA!"); */
  const data = mockData.results;
  newsDiv.innerHTML = data
    .map((article) => {
      return `<img src='${article.image_url}' style='max-width: 600px;'>
                <h1>${article.title}</h1> 
                <p>${article.description}</p>`;
    })
    .join("");
}

fetchNews();

export { fetchNews };
