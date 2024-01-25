import axios from "axios";

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

trump();
