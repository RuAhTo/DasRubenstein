import axios from "axios";
import { NewsArticle } from "./news";

const newsDataIoKeys: string[] = [
  "pub_3707400defd076981069b5b55870cb59c8cf2",
  "pub_37022a971a5dd4d83e968c09e01d9dbb47c0a",
  "pub_3745676b8bf54a1510608d38e14ff61ac979d",
];
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
