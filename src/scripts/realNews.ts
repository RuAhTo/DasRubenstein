import axios from "axios";
import { NewsArticle } from "./news";

const newsDataIoKeys: string[] = [
  "pub_3707400defd076981069b5b55870cb59c8cf2",
  "pub_37022a971a5dd4d83e968c09e01d9dbb47c0a",
  "pub_3745676b8bf54a1510608d38e14ff61ac979d",
];
const apiKey: string = newsDataIoKeys[0]; //TODO: change key automatically when one runs out

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
    .catch((error) => {
      //TODO: if error == too many requests, use new api key
      console.log(error);
      return null;
    });
}
