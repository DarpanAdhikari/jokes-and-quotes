const jokeHolder = document.querySelector(".card-body"),
changeBtn = document.querySelector(".arrow-right"),
copyBtn = document.querySelector(".copy"),
category = document.querySelector(".title"),
jokes = document.querySelector(".jokes"),
Quote = document.querySelector(".Quote");
function getJokes() {
fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlag=nsfw,religious,political,racist,sexist,explicit&type=single")
  .then(data => data.json())
  .then(item => {
    jokeHolder.textContent = item.joke
    category.textContent = item.category
    document.querySelector(".author").textContent = ""
    document.querySelector(".card-head").textContent = "😆"
  })
}
function getQuotes() {
fetch('https://quotable.io/random')
  .then(data => data.json())
  .then(item => {
    category.textContent = "Quotes"
    jokeHolder.textContent = item.content
    document.querySelector(".author").textContent = "-" + item.author
    document.querySelector(".card-head").textContent = "😊"
  });
}
window.onload = () => {
getCategory = localStorage.getItem("category")
if (getCategory === "jokes") { 
  getJokes();
  jokes.style.background = "#fff";
}
else { getQuotes();
  Quote.style.background = "#fff"; }
}
changeBtn.onclick = () => {
getCategory = localStorage.getItem("category")
if (getCategory === "jokes") { getJokes(); }
else { getQuotes(); }
}
function checkStatus() {
if (checkbox[0].checked) {
  getJokes();
} else {
  getQuotes();
}
}

copyBtn.onclick = () => {
navigator.clipboard.writeText(jokeHolder.textContent);
}
jokes.onclick = () => {
checkCategory = localStorage.setItem("category", "jokes");
jokes.style.background = "#fff";
Quote.style.background = "";
getJokes();
}
Quote.onclick = () => {
checkCategory = localStorage.setItem("category", "quotes");
jokes.style.background = "";
Quote.style.background = "#fff";
getQuotes();
}
var getCategory;
const speech = document.querySelector(".speaking");
speech.onclick = () => {
if (!speechSynthesis.speaking) {
  let Utterance = new SpeechSynthesisUtterance(jokeHolder.textContent);
  Utterance.lang = "hi-IN";
  speechSynthesis.speak(Utterance);

}
}
const facebook = document.querySelector(".facebook");
facebook.href = `http://www.facebook.com/share.php?u=${window.location}`;

document.onkeyup=(e)=>{
      if(e.keyCode = "39"){
         changeBtn.click();
      }
    }
