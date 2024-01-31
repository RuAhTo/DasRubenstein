import axios from "axios";
 
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
