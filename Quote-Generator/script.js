const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    }
];
(()=>{
    quogene();
})();
document.getElementById("next").addEventListener('click', ()=>{
    quogene();
})
function quogene(){
    let i = Math.floor(Math.random() * quotes.length)
    document.getElementById("quote").innerText = quotes[i].quote
    document.getElementById("name").innerText = quotes[i].author
}