import { GetArticleBookmarkStatus, ToggleArticleBookmarked } from "./bookmarks";

const newsArticlesContainer = document.querySelector(".news-articles") as HTMLDivElement;

export type NewsArticle = {
    article_id?: string,
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
      <article class="news-article" data-article-id="${article.article_id}">
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
          <div class="news-article-bookmark-source-date-wrapper">
            <button class="news-article-toggle-bookmark" type="button">
              <i class="material-icons">${GetArticleBookmarkStatus(article.article_id)}</i>
            </button>          
            <div class="news-article-source-date-wrapper">          
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
            </div>
          </div>
          <span class="line"></span>
      </article>
  `;
  })
  .join("");

  newsArticlesContainer.querySelectorAll(".news-article-toggle-bookmark")
  .forEach(button => button.addEventListener("click", () => {
    const articleId = button.closest(".news-article")?.getAttribute("data-article-id");
    ToggleArticleBookmarked(articles.filter(article => article.article_id == articleId)[0], button.querySelector("i"))
  }));
}
