// import axios from "axios";
// import mockData from "../mockData.json";


//Kims dejtingskola
import {loadKimQuotes} from '/src/scripts/kim.js';

loadKimQuotes();


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

function fetchNews() {
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

/* 
function newsTest(){
    const url = `https://api.worldnewsapi.com/search-news?text=saab/source-countries=sv/&language=en&api-key=d7d656cae7b2484682b91942b7092e48`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            console.log("hämtningen lyckades! :" + response)
            const newsGrej = document.getElementById('news');
            newsGrej.textContent = data + "HÄR KOMMER DET SNART NYHETER";
        })
        .catch(error =>
            console.log("DET BLEV FEEEELL!!!", error))
};

newsTest();

function finHund(){
    const url = 'https://dog.ceo/api/breeds/image/random';
    axios.get(url)
        .then(response => {
            const data = response.data;
            const hundGrej = document.getElementById('hund');
            hundGrej.src = data.message;


        })
    };

    finHund();




function trump(){
    const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    axios.get(url)
        .then(response => {
            const data = response.data;
            const trumpGrej = document.getElementById('trump');
            trumpGrej.textContent = data.message;
        })
}

trump(); */

/*  async function fetchNews() {
    try{
   const response = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=bcrUaRq7nGakX8urZvUojmJWt3YpZeLULLHsxf01&search=usd');
   console.log(response.data)
    
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
 */

var imagesArray = new Array(7);
imagesArray[0] = new Image();
imagesArray[0].src = "../images/saab/saab1.png";
imagesArray[1] = new Image();
imagesArray[1].src = "../images/saab/saab2.png";
/* imagesArray[2] = new Ima..ge();
imagesArray[2].src = new "https://www.example.com/images/image1.jpg";
imagesArray[3] = new Image();
imagesArray[3].src = new "alligator.jpg";
imagesArray[4] = new Image();
imagesArray[4].src = new "fish.jpg";
imagesArray[5] = new Image();
imagesArray[5].src = new "parrot.jpg";
imagesArray[6] = new Image();
imagesArray[6].src = new "cat.jpg"; */

function displaySaab() {
    let num = Math.floor(Math.random() * imagesArray.lenght);
    const img = document.getElementById('randomSaab');
    img.src = imagesArray[num].src;

  }

  setInterval(displaySaab, 2000);