import axios from "axios";

/* https://newsdata.io/api/1/news?apikey=pub_3707400defd076981069b5b55870cb59c8cf2  */
/* https://newsdata.io/api/1/news?apikey=pub_37022a971a5dd4d83e968c09e01d9dbb47c0a */
/* https://newsdata.io/api/1/news?apikey=pub_3745676b8bf54a1510608d38e14ff61ac979d
 */

/* document.getElementById('toppNyheter').addEventListener('click', function(event) {
    fetchTopNews();
});

document.getElementById('politik').addEventListener('click', function(event){
    fetchPoliticNews();
});

document.getElementById('datum').addEventListener('click', function(event){
    fetchDate();
}) */





/* export async function fetchNewsReal(){ */
async function fetchNewsReal() {
    /* const apiKey = 'pub_3707400defd076981069b5b55870cb59c8cf2'; */
    const apiKey = 'pub_37022a971a5dd4d83e968c09e01d9dbb47c0a';
    /* const apiKey = 'pub_3745676b8bf54a1510608d38e14ff61ac979d'; */
/*     const apiKey = 'pub_3707400defd076981069b5b55870cb59c8cf2';
 */    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;
        try {
        const response = await axios.get(url);
        console.log("FICK IN DATAAAA!!!", response);  
        const articles = response.data.results;
        const newsDiv = document.getElementById('newsItem');
        
        newsDiv.innerHTML = articles.map(article => {
            const imageUrl = article.image_url || 'default_image_url.jpg';
            const title = article.title || 'No title';
            const description = article.description || 'No description available';

            return `<div class="news-article">
                        <img src="${imageUrl}" alt="Article Image" style='max-width: 600px;'>
                        <h1>${title}</h1>
                        <p>${description}</p>
                        <div class="linje"></div>
                    </div>`;
        }).join(""); 
                } catch (error) {
                console.error(error);
                }
                }
 /*    } */
  
export{fetchNewsReal}

   
    
   




    async function fetchTopNewsReal() {
        
        /* const apiKey = 'pub_3707400defd076981069b5b55870cb59c8cf2'; */
        const apiKey =  'pub_37022a971a5dd4d83e968c09e01d9dbb47c0a'; 
        /* const apiKey = 'pub_3745676b8bf54a1510608d38e14ff61ac979d'; */
        const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;
        
        try {
            console.log("Nu kom det in TOP NEWS!!!");
            const response = await axios.get(url);
            console.log(response.data);
            const articles = response.data.results;
            const newsDiv = document.getElementById('newsItem');

            newsDiv.innerHTML = articles
            .filter(article => article.category && article.category.includes('top'))
            .map(article => ({
                    imageUrl: article.image_url || 'default_image_url.jpg',
                    title: article.title || 'No title',
                    description: article.description || 'No description available',
            }))
            .map(article => (
                    `<img src='${article.imageUrl}' style='max-width: 600px;'>
                     <h1>${article.title}</h1>
                     <p>${article.description}</p>`
            ))
            .join(""); // Combine all article strings into a single HTML string
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    /* export{fetchTopNewsReal}; */
    
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('search').addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                fetchSearchReal(event.target.value); 
            }
        });
    });


    function fetchSearchReal(searchTerm) {

        /* const apiKey = 'pub_3707400defd076981069b5b55870cb59c8cf2'; */
        const apiKey =  'pub_37022a971a5dd4d83e968c09e01d9dbb47c0a'; 
        /* const apiKey = 'pub_3745676b8bf54a1510608d38e14ff61ac979d'; */
        const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

        console.log("Searching for:", searchTerm);
        const data = axios.get(url); // Use your actual data source
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const newsDiv = document.getElementById('newsItem');
        newsDiv.innerHTML = data
            .filter(({title, description, keywords}) => {
                const titleLower = title?.toLowerCase() || '';
                const descriptionLower = description?.toLowerCase() || '';
                const keywordsLower = keywords?.map(keyword => keyword?.toLowerCase()) || [];
                return [titleLower, descriptionLower, ...keywordsLower].some(text => text.includes(lowerCaseSearchTerm));
            })
            .map(({title, description, image_url}) => 
                `<img src='${image_url}' style='max-width: 600px;'>
                 <h1>${title}</h1>
                 <p>${description}</p>`)
            .join("");
    }
    
    // Initial fetch to display some news
    export {fetchSearchReal}
 
    






    function fetchDateReal() {
       /*  const apiKey = 'pub_3707400defd076981069b5b55870cb59c8cf2'; */
        const apiKey = 'pub_37022a971a5dd4d83e968c09e01d9dbb47c0a';
        /* const apiKey = 'pub_3745676b8bf54a1510608d38e14ff61ac979d'; */

        const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;
        
        console.log("Nu kom det in MOCKDATA!");
        const data = axios.get(url);
        const newsDiv = document.getElementById('newsItem');
        newsDiv.innerHTML = data
        .sort((a, b) => {
            const dateA = new Date(a.pubDate);
            const dateB = new Date(b.pubDate);
            return dateB - dateA;
        })
        .map(article => {
            // Process the articles
            return {
                imageUrl: article.image_url,
                title: article.title,
                description: article.description,
            };
        })
        .map(article => {
            // Convert processed articles into HTML strings
            return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                    <h1>${article.title}</h1>
                    <p>${article.description}</p>`;
        })  
        .join(""); // Combine all article strings into a single HTML string
    }


  /*   export{fetchDateReal};
 */


  function fetchPoliticNewsReal() {
    /*  const apiKey = 'pub_3707400defd076981069b5b55870cb59c8cf2'; */
    /* const apiKey = 'pub_37022a971a5dd4d83e968c09e01d9dbb47c0a'; */
    const apiKey = 'pub_3745676b8bf54a1510608d38e14ff61ac979d';

    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

    /* console.log("Nu kom det in MOCKDATA!"); */
    const data = axios.get(url);
    const newsDiv = document.getElementById('newsItem');
    newsDiv.innerHTML = data
    .filter(article => {
        // Filter articles based on a condition. 
        // For example, only show articles with a certain word in the title:
        return article.category.includes('politics');
    })
    .map(article => {
        // Process the articles
        return {
            imageUrl: article.image_url,
            title: article.title,
            description: article.description,
        };
    })
    .map(article => {
        // Convert processed articles into HTML strings
        return `<img src='${article.imageUrl}' style='max-width: 600px;'>
                <h1>${article.title}</h1>
                <p>${article.description}</p>`;
    })  
    .join(""); // Combine all article strings into a single HTML string
}


















/* import axios from "axios";
 
async function fetchNewsReal() {
    try {
        // Ensure this URL is correct and points to your actual data source
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_37022a971a5dd4d83e968c09e01d9dbb47c0a');
        console.log("Data fetched from the API:", response.data);
        
        const articles = response.data.results;
        const newsDiv = document.getElementById('newsItem');

        // Check if newsDiv exists
        if (!newsDiv) {
            console.error('newsItem element not found');
            return;
        }

        if (Array.isArray(articles)) {
            newsDiv.innerHTML = articles.map(article => {
                const imageUrl = article.image_url || 'default_image_url.jpg'; // Provide a default image URL if none
                const title = article.title || 'No title';
                const description = article.description || 'No description available';

                return `<div class="news-article">
                            <img src="${imageUrl}" alt="Article Image" style='max-width: 600px;'>
                            <h1>${title}</h1>
                            <p>${description}</p>
                        </div>`;
            }).join(""); 
        } else {
            newsDiv.innerHTML = "<p>No news data available</p>";
        }
    
    } catch (error) {
        console.error('Could not fetch news from the API:', error);
    }
}

export { fetchNewsReal };
 */