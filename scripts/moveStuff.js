function swapGarbageCharacter(titleText) {
  var charToSwap = getRandomInt(0, titleText.textContent.length);
  var newChar = getGarbageChars();
  titleText.textContent =
    titleText.textContent.substr(0, charToSwap) +
    newChar +
    titleText.textContent.substr(charToSwap + 1);
}

function getGarbageChars() {
  var garbage = "";
  garbage += String.fromCharCode(getRandomInt(33, 64));
  return garbage;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var titleText = document.getElementById("titleText");
setInterval(swapGarbageCharacter, 10, titleText);
