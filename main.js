
async function fetchQuote() {
    const url = "https://dummyjson.com/quotes/random";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}
function displayQuote() {
    const author = document.querySelector('#author');
    const quote = document.querySelector('#quote');
    fetchQuote().then(data => {
        author.innerHTML = '— ' + data.author;
        let formattedQuote = data.quote.toLowerCase().split('.').map((str, index) => {
            if (index === 0) return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
            return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
            }).join('. ');
            quote.innerHTML = '"' + formattedQuote.slice(0, -1) + '"';
    });

}

window.document.addEventListener('DOMContentLoaded', function() {
    displayQuote();
});