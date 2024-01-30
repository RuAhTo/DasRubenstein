import axios from "axios";
import mockData from "../mockData.json";


//Kims dejtingskola

import {loadKimQuotes} from '/src/scripts/kim.js';

loadKimQuotes();

import {loadOlleQuotes} from '../scripts/olle';

loadOlleQuotes();

import {loadDodenQuotes} from '../scripts/doden';

loadDodenQuotes();

 /* const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_3707400defd076981069b5b55870cb59c8cf2'); */

/* async function fetchNews() {
    try{
    
    const response = await axios.get('mockData');
    console.log(response.data);
    
    const data = response.data.results;
    const newsDiv = document.getElementById('newsItem');
    
    if (Array.isArray(data)) {
        newsDiv.innerHTML = data.map(article => {
            return `<img src='${article.image_url}'>
                    <h1>${article.title}</h1>s
                    <p>${article.description}</p>`;
        }).join(""); 
    } else {
        newsDiv.innerHTML = "<p>No news data available</p>";
    }

    console.log(response.data)
    
}
catch (error){
        console.error('Could not fetch news from api', error)
    }
}

fetchNews() */

import{fetchNews} from '../scripts/nyheter';
fetchNews();






/* function fetchNews() {
    console.log("Nu kom det in MOCKDATA!");
    const data = mockData.results;
    const newsDiv = document.getElementById('newsItem');
    newsDiv.innerHTML = data.map(article => {
        return `<img src='${article.image_url}'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    }).join("");
}

fetchNews();
 */



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




/* function trump(){
    const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    axios.get(url)
        .then(response => {
            const data = response.data;
            const trumpGrej = document.getElementById('trump');
            trumpGrej.textContent = data.message;
        })
}

trump(); */

 /* async function fetchNews() {
    try{
   const response = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=bcrUaRq7nGakX8urZvUojmJWt3YpZeLULLHsxf01&search=usd');
   console.log("NU KOM DET IN MASSA NEWSSS" + response.data)
    
    const data = response.data.data;
    const newsDiv = document.getElementById('newsItem');
    

 newsDiv.innerHTML = `${data.map((article) => {
   return   `<img src='${article.image_url}'>
    <h1>${article.title}</h1>
    <p>${article.description}</p> `;
})}`.join(""); ;
    
    console.log(response.data)
    
}
catch (error){
        console.error('Could not fetch news from api', error)
    }
}

fetchNews(); */





/* const quotes = new Array();
let numberOfQuotes = 0;
let currentQuoteIndex = 0;

function kimsDejting(quote) {
    quotes[numberOfQuotes++] = quote;
}

function visaKim() {
    if (numberOfQuotes > 0) {
        const data = document.getElementById('kimsText');
        data.innerHTML = quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % numberOfQuotes; 
    }
}

kimsDejting("Tre saker att tänka på: flörta, prata känslor och visa din personlighet. Var dig själv och undvik att ljuga. Detta gäller både bakom datorskärmen och när du och din träff möts ansikte mot ansikte. Det kommer inte löna sig att fara med osanning då lögner oftast kommer fram till slut. Skriver du något som inte stämmer i din presentation, eller i ett privat meddelande till din dejt, så kan detta avslöjas snabbt när ni väl ses.");

kimsDejting("Gott uppförande är en grundregel. Att säga ”tack”, uppföra sig bra och att vara trevlig på en dejt kommer aldrig att gå ur stil. Det är väl inte för mycket begärt?");

kimsDejting("Ignorera telefonen. Om du verkligen vill att den andra personen ska känna att du bryr dig; ignorera din telefon under hela dejten och visa uppmärksamhet för den du faktiskt är där för att träffa. Ett pågående samtal som avbryts av notifieringar bryter magin omedelbart. ICQ, MSN och Myspace finns faktiskt kvar även efter dejten.");

kimsDejting("Kom ihåg detaljerna. Det är ofta de små sakerna som betyder mest för oss. Genom att minnas något enkelt såsom din dejts favoritchoklad, dejtens syskons namn eller favoritkaffe kommer att få dig att hamna på plus. Varför inte möta upp på dejt nummer två med den där latten på lättmjölk med en extra espresso-shot och caramel syrup som hen nämnde någon gång att hen bara ÄLSKAR?");

kimsDejting("Som Tove Jansson så bra uttryckte det, ”det är ingen konst att vara modig om man inte är rädd” – Och mod är riktigt attraktivt! Därför kommer personen som får din uppvakning antagligen att bli smickrad och känna sig utvald. Det finns något genuint fint med en person som tar mod till sig trots att hon eller han är rädd och ändå frågar om ett telefonnummer eller bjuder ut på dejt.");

kimsDejting("Killar älskar när tjejer dricker öl. Antar att det skapar en illusion av närhet vilket tyvärr är den enda sorts närhet vi med säkerhet kan anta att alla grabbar klarar av. ");


visaKim();

setInterval(visaKim, 20000); */


var imagesArray = new Array(9);
imagesArray[0] = new Image();
imagesArray[0].src = "/src/images/saab/saab1.png";
imagesArray[1] = new Image();
imagesArray[1].src = "/src/images/saab/saab2.png";
imagesArray[2] = new Image();
imagesArray[2].src = "/src/images/saab/saab3.png";
imagesArray[3] = new Image();
imagesArray[3].src = "/src/images/saab/saab4.png";
imagesArray[4] = new Image();
imagesArray[4].src = "/src/images/saab/saab5.png";
imagesArray[5] = new Image();
imagesArray[5].src = "/src/images/saab/saab6.png";
imagesArray[6] = new Image();
imagesArray[6].src = "/src/images/saab/saab7.png";
imagesArray[7] = new Image();
imagesArray[7].src = "/src/images/saab/saab8.png";
imagesArray[8] = new Image();
imagesArray[8].src = "/src/images/saab/saab9.png";
imagesArray[9] = new Image();
imagesArray[9].src = "/src/images/saab/saab10.png";





function displaySaab() {
    let num = Math.floor(Math.random() * imagesArray.length);
    const img = document.getElementById('randomSaab');
    img.src = imagesArray[num].src;

  }

  setInterval(displaySaab, 1000);
  

var imagesArray2 = new Array(5);
imagesArray2[0] = new Image();
imagesArray2[0].src = "/src/images/pyramider/pyramid1.png";
imagesArray2[1] = new Image();
imagesArray2[1].src = "/src/images/pyramider/pyramid2.png";
imagesArray2[2] = new Image();
imagesArray2[2].src = "/src/images/pyramider/pyramid3.png";
imagesArray2[3] = new Image();
imagesArray2[3].src = "/src/images/pyramider/pyramid4.png";
imagesArray2[4] = new Image();
imagesArray2[4].src = "/src/images/pyramider/pyramid5.png";


function displayPyramid() {
    let num = Math.floor(Math.random() * imagesArray2.length);
    const img = document.getElementById('randomPyramid');
    img.src = imagesArray2[num].src;

  }

  setInterval(displayPyramid, 1500);