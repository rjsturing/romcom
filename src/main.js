// Create variables targetting the relevant DOM elements here 👇
// Should I add Id's to these elements and target element id's instead?

// var homeButton = document.querySelector(".home-button"); 
var randomCoverButton = document.querySelector(".random-cover-button"); 
// var saveCoverButton = document.querySelector("save-cover-button");
// var viewSavedButton = document.querySelector("view-saved-button");
// var makeNewButton = document.querySelector("make-new-button");
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
// var  = document.querySelector('.tagline');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;

// Add your event listeners here 👇

// homeButton.addEventListener("click", homeButtonClick)
randomCoverButton.addEventListener("click", randomCoverButtonClick)
// saveCoverButton.addEventListener("click", saveCoverButtonClick)
// viewSavedButton.addEventListener("click", viewSavedButtonClick)
// makeNewButton.addEventListener("click", makeNewButtonClick)

// Create your event handlers and other functions here 👇

// function homeButtonClick() {

// }

function randomCoverButtonClick() {
  var imgSrc = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  var cover = createCover(imgSrc, title, descriptor1, descriptor2)
  coverImage.src = cover.coverImg;
  coverTitle.innerText = cover.title;
  // study line 21 on left entirely 
  }

function saveCoverButtonClick() {

}

function viewSavedButtonClick() {

}

function makeNewButtonClick() {

}


// We've provided two functions to get you started
function getRandomIndex(arrays) {
  return Math.floor(Math.random() * arrays.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}