import axios from "axios";
import { NewsArticle } from "./news";

//Lägg till api-Nyckel från newsdata.io
const newsDataIoKeys: string[] = [];
let apiKeyIndex = 0;
let apiKey: string = newsDataIoKeys[apiKeyIndex];

export const fetchRealNews = async (query: string): Promise<NewsArticle[] | null> => {
  const languages = ["en", "sv", "de"]; //English, Swedish, Und natürlich Deutsch
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${languages}${
    query || ""
  }`;
  return await axios
    .get(url)
    .then((response) => {
      return response.data.results as NewsArticle[];
    })
    .catch(async (error) => {
      //Code 429 == TOO MANY REQUESTS
      if(error.response.status == 429) { 
        apiKeyIndex += 1;

        if(apiKeyIndex < newsDataIoKeys.length) {
          apiKey = newsDataIoKeys[apiKeyIndex];
          return await fetchRealNews(query);
        }
      }
      
      console.error(error);
      return null;
    });
}
