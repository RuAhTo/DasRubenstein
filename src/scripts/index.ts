// import { Client } from 'appwrite';
// const client = new Client();
// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('65ba5076a990069110d4');

import { loadKimQuotes } from "./kim.ts";
loadKimQuotes();

import { loadOlleQuotes } from "./olle.ts";
loadOlleQuotes();

import { loadDodenQuotes } from "./doden.ts";
loadDodenQuotes();

import { loadTomtenQuotes } from "./tomten.ts";
loadTomtenQuotes();

import { loadKungenQuotes } from "./kungen.ts";
loadKungenQuotes();

import { fetchRealNews } from "./realNews.ts";
import { fetchFakeNews } from "./fakeNews.ts";
import { FetchBookmarkedNews } from "./bookmarks.ts";
import { displayNews } from "./news.ts";

const fakeArticles = fetchFakeNews();
const dateBtn: HTMLElement | null = document.querySelector('#datum');
const topNews: HTMLElement | null = document.querySelector('#toppNyheter');
const politics: HTMLElement | null = document.querySelector('#politik');
const bookmarks: HTMLElement | null = document.querySelector('#bookmarks');
const search: HTMLElement | null = document.querySelector('#search');

(async ():Promise<void> => {
    dateBtn?.addEventListener("click", async (): Promise<void> => {
        try {
            // Hämta real news och fake articles parallellt
            const [realNews, fakeArticles] = await Promise.all([
                fetchRealNews(""),
                fetchFakeNews()
            ]);

            // Visa real news tillsammans med fake articles
            displayNews(realNews || [], [fakeArticles]);
        } catch (error) {
            // Hantera eventuella fel från antingen fetchRealNews eller fetchFakeNews
            console.error("Ett fel uppstod vid hämtning av nyheter:", error);
        }
    });
    

    topNews?.addEventListener("click", async (): Promise<void> => {
        try {
            const [realNews, fakeArticles] = await Promise.all([
                fetchRealNews("&category=top"),
                fetchFakeNews()
            ]);
            displayNews(realNews || [], [fakeArticles]);
        } catch (error) {
            console.error("Ett fel uppstod vid hämtning av top news:", error);
            // Lägg till lämplig felhantering här
        }
    });
    

    politics?.addEventListener("click", async (): Promise<void> => {
        try {
            const [realNews, fakeArticles] = await Promise.all([
                fetchRealNews("&category=politics"),
                fetchFakeNews()
            ]);
            displayNews(
                realNews || [],
                [fakeArticles].filter((article) => article?.category?.includes("politics"))
            );
        } catch (error) {
            console.error("Ett fel uppstod vid hämtning av politics news:", error);
            // Lägg till lämplig felhantering här
        }
    });
    
    bookmarks?.addEventListener("click", (): void => {
        displayNews(FetchBookmarkedNews());
    });
    

    search?.addEventListener("keyup", async (event): Promise<void> => {
        if (event.key === "Enter") {
            const query = (event?.target as HTMLInputElement)?.value;
            try {
                const [realNews, fakeArticles] = await Promise.all([
                    fetchRealNews(`&q=${query}`),
                    fetchFakeNews()
                ]);
                displayNews(
                    realNews || [],
                    [fakeArticles].filter(
                        (article) =>
                            article.title?.includes(`${query}`) ||
                            article.description?.includes(`${query}`)
                    )
                );
            } catch (error) {
                console.error("Ett fel uppstod vid sökning av nyheter:", error);
            }
        }
    });
    

    // displayNews(fakeArticles);
    displayNews(await fetchRealNews("") || [], [fakeArticles]);


})();

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

const saabImage = document.getElementById("randomSaab") as HTMLImageElement;
function displaySaab():void {
    saabImage.src =saabArray[Math.floor(Math.random() * saabArray.length)];
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

const pyramidImage = document.getElementById("randomPyramid") as HTMLImageElement;
function displayPyramid():void {
  pyramidImage.src =
    pyramidArray[Math.floor(Math.random() * pyramidArray.length)];
}
setInterval(displayPyramid, 800);
