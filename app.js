// app.js

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "It always seems impossible until it's done. - Nelson Mandela"
];

let currentBackgroundIndex = 0;
const backgrounds = [
    'url("https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Change to the path of your background images
    'url("https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    
];

const quoteContainer = document.querySelector("#quoteContainer");

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteContainer.innerHTML = `<p>${quote}</p>`;

    // Change background image
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
}
