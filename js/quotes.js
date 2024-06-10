const quotes = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "— Franklin D. Roosevelt",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: " — Martin Luther King Jr.",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "— John Lennon",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "— Nelson Mandela",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "— Ralph Waldo Emerson",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "— Winston Churchill",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "— Wayne Gretzky",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "— Dalai Lama",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "— George Eliot",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "— Steve Jobs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
