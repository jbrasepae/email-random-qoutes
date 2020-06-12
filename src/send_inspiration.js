let quotes = ["The only true measure of success if the number of people you have helped" 
]
function inspirationQuotes(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}
console.log(inspirationQuotes());

// const nodeEmail = require("nodeEmail")
// const fs = require("fs")
// const qoutes = fs.readFileSync("./qoutes.txt", "utf-8")

// const {
//     SMTP_SERVER, SMTP_PORT, SMTP_LOGIN,SMTP_PASSWORD 
// } = process.env

// function randomInspiritaion(){
//     var randomQuote = Math.floor(Math.random()*(quotes.length))
//     return quotes[randomQuote]
// }

// var transporter = nodeEmail.createTransporter({
//     host: SMTP_SERVER,
//     port: SMTP_PORT,
//     auth:{
//         service: "gmail",
//         user: SMTP_LOGIN,
//         pass:SMTP_PASSWORD
//     }
// })

// let emailDetails = {
//     from: SMTP_LOGIN,
//     to: "boitumelo.rasepae@umuzi.org",
//     subject: "Inspirational Quotes",
//     text: randomInspiritaion()
// }

// transporter.sendMail(email, function(error,info){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("email sent: " + info.response)
//     }
// })