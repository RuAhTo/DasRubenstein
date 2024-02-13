import { NewsArticle } from "./news";

const bookmarks: NewsArticle[] = JSON.parse(localStorage.getItem("bookmarked-articles") || "[]");

export const GetArticleBookmarkStatus = (articleId: string | undefined): "bookmark" | "bookmark_border" => {
    if(!articleId) return "bookmark_border";
    return bookmarks.filter(bookmarkedArticle => bookmarkedArticle.article_id === articleId).length > 0 ? "bookmark" : "bookmark_border";
}

export const ToggleArticleBookmarked = ({
    article_id,
    image_url,
    video_url,
    title,
    description,
    category,
    link,
    pubDate 
}: NewsArticle, articleBookmarkIcon?: HTMLElement | null) => {
    if(!article_id) throw new Error("ToggleArticleBookmarked didn't recieve a valid article!");
    
    const bookmarkedArticle = bookmarks.filter(bookmarkedArticle => bookmarkedArticle.article_id === article_id)
    if(bookmarkedArticle.length > 0) {
        bookmarks.splice(bookmarks.indexOf(bookmarkedArticle[0]), 1);
    } else {
        bookmarks.push({article_id, image_url, video_url, title, description, category, link, pubDate })
    }
    localStorage.setItem("bookmarked-articles", JSON.stringify(bookmarks));

    if(!articleBookmarkIcon) return;
    articleBookmarkIcon.innerText = GetArticleBookmarkStatus(article_id);
}