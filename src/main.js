// Create variables targetting the relevant DOM elements here 👇
// Should I add Id's to these elements and target element id's instead?

//buttons
var homeButton = document.querySelector(".home-button"); 
var randomCoverButton = document.querySelector(".random-cover-button"); 
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");

//book elements
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

//views
var homePage = document.querySelector(".home-view");
var viewFormView = document.querySelector(".form-view");
var viewSavedCovers = document.querySelector(".saved-view");

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;

// Add your event listeners here 👇

homeButton.addEventListener("click", homeButtonClick);
randomCoverButton.addEventListener("click", randomCoverButtonClick);
saveCoverButton.addEventListener("click", saveCoverButtonClick);
viewSavedButton.addEventListener("click", viewSavedButtonClick);
makeNewButton.addEventListener("click", makeNewButtonClick);
viewSavedCovers.addEventListener("click", viewSavedView);
window.addEventListener("load", function() {
  // makeRandomCover(); // Upating the Data Model
  // renderCurrentCover(); // Updating the DOM
});

// Create your event handlers and other functions here 
👇


function randomCoverButtonClick() {
  var imgSrc = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  
  var cover = createCover(imgSrc, title, descriptor1, descriptor2)
  
  coverImage.src = cover.coverImg;
  coverTitle.innerText = cover.title;
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
  
  }

function homeButtonClick() {
  viewFormView.classList.add("hidden");
  homePage.classList.remove("hidden")
  randomCoverButton.classList.remove("hidden")
  homeButton.classList.add("hidden")
  saveCoverButton.classList.remove("hidden")
  viewSavedButton.classList.remove("hidden")
  viewSavedCovers.classList.add("hidden")
}

function saveCoverButtonClick() {

}

function viewSavedButtonClick() {
  viewFormView.classList.add("hidden");
  homePage.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  viewSavedButton.classList.remove("hidden")
  viewSavedCovers.classList.remove("hidden")
}

function viewSavedView() {
  viewFormView.classList.remove("hidden");
  homePage.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  viewSavedButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
}

function makeNewButtonClick() {
  viewFormView.classList.remove("hidden");
  homePage.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  viewSavedButton.classList.remove("hidden")
}

function displaySavedCovers() {
  viewHomePageButton.classList.remove("hidden");
  savedCoversPage.classList.remove("hidden");
  makeRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homePage.classList.add("hidden");
  viewSavedCoversButton.classList.add("hidden");
}

function displayHomePage() {
  saveCoverButton.classList.remove("hidden");
  makeRandomCoverButton.classList.remove("hidden");
  homePage.classList.remove("hidden");
  viewHomePageButton.classList.add("hidden");
  savedCoversPage.classList.add("hidden");
  viewSavedCoversButton.classList.remove("hidden");
}


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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