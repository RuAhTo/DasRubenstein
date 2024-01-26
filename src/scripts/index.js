import axios from "axios";
import mockData from "../mockData.json";

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

function kimsDating(){
    const text = document.getElementById('kimsText');
    text.textContent = "Tre saker att tänka på: flörta, prata känslor och visa din personlighet. Var dig själv och undvik att ljuga. Detta gäller både bakom datorskärmen och när du och din träff möts ansikte mot ansikte. Det kommer inte löna sig att fara med osanning då lögner oftast kommer fram till slut. Skriver du något som inte stämmer i din presentation, eller i ett privat meddelande till din dejt, så kan detta avslöjas snabbt när ni väl ses.";
}

kimsDating ();




var quotes = new Array();
var numberOfQuotes = 0;
var quotes = new Array();
var numberOfQuotes = 0;
function addQuots(quote)
{
quotes[numberOfQuotes++] = quote;
console.log("Här kommer det random shit:" + quotes)
const data = document.getElementById()
}
// Add quotes
addQuots ("Slumpmässigt citat<br>Nummer ett");
addQuots ("Slumpmässigt citat<br>Nummer två");
addQuots ("Slumpmässigt citat<br>Nummer tre");
addQuots ("Slumpmässigt citat<br>Nummer fyra");
addQuots ("Slumpmässigt citat<br>Nummer fem");
addQuots ("Slumpmässigt citat<br>Nummer sex");

