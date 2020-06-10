let quotes = ["The only true measure of success if the number of people you have helped" 
]
function inspirationQuotes(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}
console.log(inspirationQuotes());