import axios from "axios";

const newsArticles = document.querySelector(".news-articles");

const newsDataIoKeys = [
  "pub_3707400defd076981069b5b55870cb59c8cf2",
  "pub_37022a971a5dd4d83e968c09e01d9dbb47c0a",
  "pub_3745676b8bf54a1510608d38e14ff61ac979d",
];
const apiKey = newsDataIoKeys[0]; //TODO: change key automatically when one runs out

async function fetchNewsReal() {
  const languages = ["en", "sv", "de"]; //English, Swedish, Und natürlich Deutsch
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${languages}`;

  await axios
    .get(url)
    .then((response) => {
      newsArticles.innerHTML = response.data.results
        .map((article) => {
          return `
            <article class="news-article">
                ${
                  article.image_url
                    ? `${
                        article.image_url
                          ? `<img class="news-article-image" src=${article.image_url} alt="Article image" />`
                          : ""
                      }`
                    : `${
                        article.video_url
                          ? `<video class="news-article-video" src=${article.video_url} controls>Your browser does not support the video tag.</video>`
                          : ""
                      }`
                }
                ${
                  article.title
                    ? `<h2 class="news-article-title">${article.title}</h2>`
                    : ""
                }
                ${
                  article.description
                    ? `<p class="news-article-description">${article.description}</p>`
                    : ""
                }                
                ${
                  article.link
                    ? `<a class="news-article-source" href="${article.link}" target="_blank">Källa</a>`
                    : ""
                }
                ${
                  article.pubDate
                    ? `<p class="news-article-date">${
                        article.pubDate.split(" ")[0]
                      }</p>`
                    : ""
                }
                <span class="line"></span>
            </article>
        `;
        })
        .join("");
    })
    .catch((error) => {
      //TODO: if error == too many requests, use new api key
      console.log(error);
    });
}

export { fetchNewsReal };

async function fetchTopNewsReal() {
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

  try {
    console.log("Nu kom det in TOP NEWS!!!");
    const response = await axios.get(url);
    console.log(response.data);
    const articles = response.data.results;
    const newsDiv = document.getElementById("newsItem");

    newsDiv.innerHTML = articles
      .filter((article) => article.category && article.category.includes("top"))
      .map((article) => ({
        imageUrl: article.image_url || "default_image_url.jpg",
        title: article.title || "No title",
        description: article.description || "No description available",
      }))
      .map(
        (article) =>
          `<img src='${article.imageUrl}' style='max-width: 600px;'>
                     <h1>${article.title}</h1>
                     <p>${article.description}</p>`
      )
      .join(""); // Combine all article strings into a single HTML string
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

/* export{fetchTopNewsReal}; */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      fetchSearchReal(event.target.value);
    }
  });
});

function fetchSearchReal(searchTerm) {
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

  console.log("Searching for:", searchTerm);
  const data = axios.get(url); // Use your actual data source
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  const newsDiv = document.getElementById("newsItem");
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
export { fetchSearchReal };

function fetchDateReal() {
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

  console.log("Nu kom det in MOCKDATA!");
  const data = axios.get(url);
  const newsDiv = document.getElementById("newsItem");
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

/*   export{fetchDateReal};
 */

function fetchPoliticNewsReal() {
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

  /* console.log("Nu kom det in MOCKDATA!"); */
  const data = axios.get(url);
  const newsDiv = document.getElementById("newsItem");
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

/* document.getElementById('toppNyheter').addEventListener('click', function(event) {
    fetchTopNews();
});

document.getElementById('politik').addEventListener('click', function(event){
    fetchPoliticNews();
});

document.getElementById('datum').addEventListener('click', function(event){
    fetchDate();
}) */

/* import axios from "axios";
 
async function fetchNewsReal() {
    try {
        // Ensure this URL is correct and points to your actual data source
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_37022a971a5dd4d83e968c09e01d9dbb47c0a');
        console.log("Data fetched from the API:", response.data);
        
        const articles = response.data.results;
        const newsDiv = document.getElementById('newsItem');

        // Check if newsDiv exists
        if (!newsDiv) {
            console.error('newsItem element not found');
            return;
        }

        if (Array.isArray(articles)) {
            newsDiv.innerHTML = articles.map(article => {
                const imageUrl = article.image_url || 'default_image_url.jpg'; // Provide a default image URL if none
                const title = article.title || 'No title';
                const description = article.description || 'No description available';

                return `<div class="news-article">
                            <img src="${imageUrl}" alt="Article Image" style='max-width: 600px;'>
                            <h1>${title}</h1>
                            <p>${description}</p>
                        </div>`;
            }).join(""); 
        } else {
            newsDiv.innerHTML = "<p>No news data available</p>";
        }
    
    } catch (error) {
        console.error('Could not fetch news from the API:', error);
    }
}

export { fetchNewsReal };
 */
