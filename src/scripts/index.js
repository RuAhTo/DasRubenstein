import axios from "axios";
import mockData from "../mockData.json";


//Kims dejtingskola

import {loadKimQuotes} from '/src/scripts/kim.js';

loadKimQuotes();


import {loadOlleQuotes} from '../scripts/olle';

loadOlleQuotes();

import {loadDodenQuotes} from '../scripts/doden';

loadDodenQuotes();

import {loadTomtenQuotes} from '../scripts/tomten';

loadTomtenQuotes();

import {loadKungenQuotes} from '../scripts/kungen';

loadKungenQuotes();

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









/* import{fetchNews} from '../scripts/nyheter';
fetchNews(); */


import {fetchNewsReal} from "../scripts/nyheterREAL";
fetchNewsReal();







/* import { fetchSearch } from "../scripts/nyheter";
fetchSearch(); */






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


const imagesArray = new Array(9);
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
  

const imagesArray2 = new Array(5);
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
imagesArray2[5] = new Image();
imagesArray2[5].src = "/src/images/pyramider/pyramid6.png";


function displayPyramid() {
    let num = Math.floor(Math.random() * imagesArray2.length);
    const img = document.getElementById('randomPyramid');
    img.src = imagesArray2[num].src;

  }

  setInterval(displayPyramid, 800);