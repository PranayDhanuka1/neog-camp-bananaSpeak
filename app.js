var translalteBtn = document.querySelector("#translateBtn");
var inputText = document.querySelector("#textinput");
var output = document.querySelector("#output");
var sourceURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
   return sourceURL + "?text=" + text
}

function errorHandler(error) {
   console.log("Something went Wrong", error)
   alert("Something went wrong, please try again latter")
}

function clickEventhandler() {

   var input = inputText.value;

   fetch(getTranslationURL(input))
      .then(response => response.json())
      .then(json =>
         output.innerText = json.contents.translated)
      .catch(errorHandler)
}

translalteBtn.addEventListener("click", clickEventhandler)






















