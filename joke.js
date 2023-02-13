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
 function getFacts() {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'db37ac66cemshc981eefb466e4d9p1d0daejsn54d414dff1d9',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
          }
        };
        fetch('https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true', options)
          .then(response => response.json())
          .then(response => {
            category.textContent = "Facts"
            jokeHolder.textContent = response.text
            document.querySelector(".author").textContent = ""
            document.querySelector(".card-head").textContent = "😯"
          })
      }

window.onload = () => {
      getCategory = localStorage.getItem("category");
      if (getCategory === "jokes") { 
        getJokes();
        jokes.style.background = "#fff";
      }
      else if(getCategory === "quotes") { getQuotes();
        Quote.style.background = "#FFFFFF"; }
        else{
         getFacts(); 
         factThing.style.background = "#fff";}
       }
       
  changeBtn.onclick = () => {
      getCategory = localStorage.getItem("category")
      if (getCategory === "jokes") { getJokes(); }
      else if(getCategory === "quotes") { getQuotes(); }else {getFacts();}
    }


copyBtn.onclick = () => {
navigator.clipboard.writeText(jokeHolder.textContent);
}
jokes.onclick = () => {
checkCategory = localStorage.setItem("category", "jokes");
jokes.style.background = "#fff";
factThing.style.background = "";
Quote.style.background = "";
getJokes();
}
Quote.onclick = () => {
checkCategory = localStorage.setItem("category", "quotes");
jokes.style.background = "";
Quote.style.background = "#fff";
factThing.style.background = "";
getQuotes();
}
const factThing = document.querySelector(".facts");
factThing.onclick=()=>{
  checkCategory = localStorage.setItem("category", "facts");
   jokes.style.background = "";
   Quote.style.background = "";
   factThing.style.background = "#fff";
      getFacts();
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


window.addEventListener("offline",()=>{
     setTimeout(()=>{
      document.querySelector(".bottom-network-check").classList.remove("active");
     },5000)
     document.querySelector(".bottom-network-check").classList.add("active");
     document.querySelector(".bottom-network-check").textContent = "you are offline!!😥";
     document.querySelector(".bottom-network-check").style.background ="red";
  });
  window.addEventListener("online",()=>{
    setTimeout(()=>{
      document.querySelector(".bottom-network-check").classList.remove("active");
     },5000)
     document.querySelector(".bottom-network-check").classList.add("active");
     document.querySelector(".bottom-network-check").textContent = "Back to online🥰";
     document.querySelector(".bottom-network-check").style.background ="green";
  });
