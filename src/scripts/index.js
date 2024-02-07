// import { Client } from 'appwrite';
// const client = new Client();
// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('65ba5076a990069110d4');

import { loadKimQuotes } from "/src/scripts/kim.js";
loadKimQuotes();

import { loadOlleQuotes } from "../scripts/olle";
loadOlleQuotes();

import { loadDodenQuotes } from "../scripts/doden";
loadDodenQuotes();

import { loadTomtenQuotes } from "../scripts/tomten";
loadTomtenQuotes();

import { loadKungenQuotes } from "../scripts/kungen";
loadKungenQuotes();

import { fetchRealNews } from "./realNews";
import { fetchFakeNews } from "./fakeNews";
import { displayNews } from "./news";

const fakeArticles = await fetchFakeNews();

document.getElementById("datum").addEventListener("click", async () => {
  displayNews(await fetchRealNews(""), fakeArticles);
});

document.getElementById("toppNyheter").addEventListener("click", async () => {
  displayNews(await fetchRealNews("&category=top"), fakeArticles);
});

document.getElementById("politik").addEventListener("click", async () => {
  displayNews(
    await fetchRealNews("&category=politics"),
    fakeArticles.filter((article) => article.category.includes("politics"))
  );
});

document.getElementById("search").addEventListener("keyup", async (event) => {
  if (event.key === "Enter") {
    const query = event.target.value;
    // displayNews(await fetchRealNews(`&q=${query}`), fakeArticles); //Seems to be far fetched that we have fake article that fits criteria, so might want to not filter
    displayNews(
      await fetchRealNews(`&q=${query}`),
      fakeArticles.filter(
        (article) =>
          article.title?.includes(`${query}`) ||
          article.description?.includes(`${query}`)
      )
    );
  }
});

displayNews(await fetchRealNews(""), fakeArticles);

/* function finHund(){
    const url = 'https://dog.ceo/api/breeds/image/random';
    axios.get(url)
        .then(response => {
            const data = response.data;
            const hundGrej = document.getElementById('hund');
            hundGrej.src = data.message;
        })
    };

finHund(); */

const saabArray = [
  "./src/images/saab/saab1.png",
  "./src/images/saab/saab2.png",
  "./src/images/saab/saab3.png",
  "./src/images/saab/saab4.png",
  "./src/images/saab/saab5.png",
  "./src/images/saab/saab6.png",
  "./src/images/saab/saab7.png",
  "./src/images/saab/saab8.png",
  "./src/images/saab/saab9.png",
  "./src/images/saab/saab10.png",
];

const saabImage = document.getElementById("randomSaab");
function displaySaab() {
  saabImage.src = saabArray[Math.floor(Math.random() * saabArray.length)];
}
setInterval(displaySaab, 1000);

const pyramidArray = [
  "./src/images/pyramider/pyramid1.png",
  "./src/images/pyramider/pyramid2.png",
  "./src/images/pyramider/pyramid3.png",
  "./src/images/pyramider/pyramid4.png",
  "./src/images/pyramider/pyramid5.png",
  "./src/images/pyramider/pyramid6.png",
];

const pyramidImage = document.getElementById("randomPyramid");
function displayPyramid() {
  pyramidImage.src =
    pyramidArray[Math.floor(Math.random() * pyramidArray.length)];
}
setInterval(displayPyramid, 800);
