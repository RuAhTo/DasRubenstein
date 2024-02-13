import mockData from "../json/mockData.json";
import { NewsArticle } from "./news";

export const fetchFakeNews = () => {
  return mockData.articles as NewsArticle;
}
