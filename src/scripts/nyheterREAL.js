import axios from "axios";

const newsArticlesContainer = document.querySelector(".news-articles");

const newsDataIoKeys = [
  "pub_3707400defd076981069b5b55870cb59c8cf2",
  "pub_37022a971a5dd4d83e968c09e01d9dbb47c0a",
  "pub_3745676b8bf54a1510608d38e14ff61ac979d",
];
const apiKey = newsDataIoKeys[0]; //TODO: change key automatically when one runs out

async function fetchNews(query) {
  const languages = ["en", "sv", "de"]; //English, Swedish, Und natürlich Deutsch
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${languages}${
    query || ""
  }`;

  console.log(query);
  console.log(url);

  await axios
    .get(url)
    .then((response) => {
      newsArticlesContainer.innerHTML = response.data.results
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

export const initRealNews = () => {
  document.getElementById("datum").addEventListener("click", (event) => {
    fetchNews("");
  });

  document.getElementById("toppNyheter").addEventListener("click", (event) => {
    fetchNews("&category=top");
  });

  document.getElementById("politik").addEventListener("click", (event) => {
    fetchNews("&category=politics");
  });

  document.getElementById("search").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      fetchNews(`&q=${event.target.value}`);
    }
  });

  fetchNews("");
};
