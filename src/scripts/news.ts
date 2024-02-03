const newsArticlesContainer = document.querySelector(".news-articles") as HTMLDivElement;

export type NewsArticle = {
    image_url?: string,
    video_url?: string,
    title?: string,
    description?: string,
    category?: string[],
    link?: string,
    pubDate?: string,
}

export const displayNews = (articles: NewsArticle[], fakeArticles?: NewsArticle[]): void => {
  
  if(fakeArticles && fakeArticles.length > 0) {
    const insertFakeEveryX = 3;
    const length = articles.length;
    for (let i = 0; i < length; i++) {
      if (i % (insertFakeEveryX + 1) === 0 && i != 0) {
        articles.splice(
          i,
          0,
          fakeArticles[Math.floor(Math.random() * fakeArticles.length)]
          );
      }
    }
  }

  newsArticlesContainer.innerHTML = articles
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
}
