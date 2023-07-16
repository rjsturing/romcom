// Create variables targetting the relevant DOM elements here 👇
var homeButton = document.querySelector(".home-button"); 
var randomCoverButton = document.querySelector(".random-cover-button"); 
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
var createNewBookButton = document.querySelector(".create-new-book-button");

//input values
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var desc1 = document.querySelector(".user-desc1");
var desc2 = document.querySelector(".user-desc2");

//book elements
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

//views
var homePage = document.querySelector(".home-view");
var viewFormView = document.querySelector(".form-view");
var viewSavedCovers = document.querySelector(".saved-view");

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
homeButton.addEventListener("click", homeButtonClick);
randomCoverButton.addEventListener("click", randomCoverButtonClick);
saveCoverButton.addEventListener("click", saveCoverButtonClick);
viewSavedButton.addEventListener("click", viewSavedButtonClick);
makeNewButton.addEventListener("click", makeNewButtonClick);
createNewBookButton.addEventListener("click", createNewBook)
viewSavedCovers.addEventListener("dblclick", deleteSavedCover);


// Create your event handlers and other functions here 👇
function randomCoverButtonClick() {
  var imgSrc = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  
  var cover = createCover(imgSrc, title, descriptor1, descriptor2)
  renderCover(cover)  
}

function renderCover(cover) {
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

function viewSavedButtonClick() {
  viewFormView.classList.add("hidden");
  homePage.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  viewSavedButton.classList.remove("hidden")
  viewSavedCovers.classList.remove("hidden")
  displaySavedCovers();
}

function makeNewButtonClick() {
  viewFormView.classList.remove("hidden");
  homePage.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  viewSavedButton.classList.remove("hidden");
  viewSavedCovers.classList.add("hidden");
}

function displaySavedCovers() {
  viewSavedCovers.innerHTML = "";

  if (savedCovers.length === 0) {
    viewSavedCovers.innerHTML = "<p>No saved covers found.</p>";
  } else {
    for (var i = 0; i < savedCovers.length; i++) {
      var cover = savedCovers[i];
      viewSavedCovers.innerHTML += `
        <div class="mini-cover" style="background-image: url(${cover.coverImg});">
          <h2 class="cover-title">${cover.title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
          <img class="cover-image" src="${cover.coverImg}" alt="No image found">
        </div>
      `;
    }
  }
}

function createNewBook(event) {
  event.preventDefault()
  var newUserCover = createCover(
    userCover.value,
    userTitle.value,
    desc1.value,
    desc2.value
  )
  covers.push(newUserCover)
  homeButtonClick();
  renderCover(newUserCover);
}

function saveCoverButtonClick() {
  var saveCover = createCover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);

  var isDuplicate = savedCovers.some(function(cover) {
    return (
      cover.coverImg === saveCover.coverImg &&
      cover.title === saveCover.title &&
      cover.tagline1 === saveCover.tagline1 &&
      cover.tagline2 === saveCover.tagline2
    );
  });

  if (!isDuplicate) {
    savedCovers.push(saveCover);
  }
}
function deleteSavedCover(event) {
  var clickedElement = event.target;
  var miniCover = clickedElement.closest(".mini-cover");
  if (miniCover) {
    var coverIndex = Array.from(viewSavedCovers.children).indexOf(miniCover);
    if (coverIndex !== -1) {
      savedCovers.splice(coverIndex, 1);
      displaySavedCovers();
    }
  }
}

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