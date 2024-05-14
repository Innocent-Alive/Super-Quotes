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
  }, 1000);
};
randomQuote();

// Tweet the quote
const tweet = function () {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweetUrl, "_blank");
};
const whatsapp = function () {
  const shareUrl = `https://wa.me/send?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(shareUrl, "_blank");
};
newQuoteBtn.addEventListener("click", randomQuote);
twitterBtn.addEventListener("click", tweet);
facebookBtn.addEventListener("click", whatsapp);
