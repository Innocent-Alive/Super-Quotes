const quoteConatiner = document.getElementById("quote-container");
const twitterBtn = document.getElementById("twitter");
const facebookBtn = document.getElementById("whatsapp");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function loading() {
  loader.style.display = "block";
  quoteConatiner.hidden = true;
}
function complete() {
  loader.style.display = "none";
  quoteConatiner.hidden = false;
}
// generating random quotes
const randomQuote = function () {
  loading();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  authorText.textContent = quote.author;
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  setTimeout(function () {
    complete();
  }, 1500);
};
randomQuote();

// Tweet the quote
const tweet = function () {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweetUrl, "_blank");
};
function copyProcess() {
  document.querySelector(".fa-solid.fa-check").style.display = "block";
  document.querySelector(".fa-regular.fa-copy").style.display = "none";
}
function copyComplete() {
  document.querySelector(".fa-solid.fa-check").style.display = "none";
  document.querySelector(".fa-regular.fa-copy").style.display = "block";
}
function copyQuote() {
  copyProcess();
  const fullQuote = `${quoteText.textContent} - ${authorText.textContent}`;
  navigator.clipboard.writeText(fullQuote);
  setTimeout(function () {
    copyComplete();
  }, 1800);
}

newQuoteBtn.addEventListener("click", randomQuote);
twitterBtn.addEventListener("click", tweet);
facebookBtn.addEventListener("click", copyQuote);
