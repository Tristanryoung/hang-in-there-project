var title = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');
var image = document.querySelector('.poster-img');

var showSavedButton = document.querySelector('.show-saved');
var randomPosterButton = document.querySelector('.show-random');
var makePosterButton = document.querySelector('.show-form');
var nevermindButton = document.querySelector('.show-main');
var backToMainButton = document.querySelector('.back-to-main');
var showMyPosterButton = document.querySelector('.make-poster');
var savePosterButton = document.querySelector('.save-poster');

var mainPosterPage = document.querySelector('.main-poster');
var posterFormPage = document.querySelector('.poster-form');
var savedPostersPage = document.querySelector('.saved-posters');

var motivationalTitleInput = document.querySelector('#poster-title');
var motivationalQuoteInput = document.querySelector('#poster-quote');
var motivationalImageInput = document.querySelector('#poster-image-url');

var savedPostersGrid = document.querySelector('.saved-posters-grid');

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don't downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = [];
var userImageURL = motivationalImageInput.value;
var userTitle = motivationalTitleInput.value;
var userQuote = motivationalQuoteInput.value;

title.innerText = (getRandomTitle(titles))
quote.innerText = (getRandomQuote(quotes))
image.src = (getRandomImage(images))

var currentPoster = new Poster (image.src, title.innerText, quote.innerText);


randomPosterButton.addEventListener('click', randomPoster);
makePosterButton.addEventListener('click', switchToForm);
nevermindButton.addEventListener('click', switchToMain);
showSavedButton.addEventListener('click', switchToSaved);
backToMainButton.addEventListener('click', backToMain);
showMyPosterButton.addEventListener('click', function(){createPoster(event)});
savePosterButton.addEventListener('click', savePoster);
savedPostersGrid.addEventListener('dblclick', function(){deleteSavedPoster(event)});


const hide = (element) => {
  element.classList.add('hidden');
}
const show = (element) => {
  element.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomImage(images) {
  var randomImage = images[getRandomIndex(images)];
  return randomImage;
}

function getRandomTitle(titles) {
  var randomTitle = titles[getRandomIndex(images)];
  return randomTitle;
}

function getRandomQuote(quotes) {
  var randomQuote = quotes[getRandomIndex(images)];
  return randomQuote;
}

function randomPoster()  {
  title.innerText = (getRandomTitle(titles));
  quote.innerText = (getRandomQuote(quotes));
  image.src = (getRandomImage(images));
  image.alt = 'randomized photo of motivational animal';
  currentPoster = new Poster (image.src, title.innerText, quote.innerText);
}

function switchToForm() {
  hide(mainPosterPage);
  show(posterFormPage);
}

function switchToMain() {
  hide(posterFormPage);
  show(mainPosterPage);
}

function switchToSaved()  {
  hide(mainPosterPage);
  show(savedPostersPage);
  savedPostersGrid.innerHTML = ``;
   for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML += 
    `<article class="mini-poster" id="${savedPosters[i].id}">
      <img class="mini-poster-img" src="${savedPosters[i].imageURL}">
      <h2 class="mini-poster-title">${savedPosters[i].title}</h2>
      <h4 class="mini-poster-quote">"${savedPosters[i].quote}</h4>
    </article>`;
  }
  if (savedPosters.length === 0)  {
    alert("You have no saved posters.")
  }
}

function backToMain() {
  hide(savedPostersPage);
  show(mainPosterPage);
}

function createPoster(event) {
  event.preventDefault()
  var userImageURL = motivationalImageInput.value;
  var userTitle = motivationalTitleInput.value;
  var userQuote = motivationalQuoteInput.value;
  currentPoster = new Poster (userImageURL, userTitle, userQuote);
  title.innerText = currentPoster.title;
  quote.innerText = currentPoster.quote;
  image.src = currentPoster.imageURL;
  images.push(userImageURL);
  titles.push(userTitle);
  quotes.push(userQuote);
  if (userImageURL === "" || userTitle === "" || userQuote === "")  {
    alert("It doesn't look like your poster is quite finished.")
  }
  switchToMain();
}

function savePoster() {
 if (currentPoster.title !== "" && !(savedPosters.includes(currentPoster)))  {
  savedPosters.push(currentPoster);
 } else {
  alert("You've already saved this poster!")
 }
}

function deleteSavedPoster()  {
  var posterToBeDeleted = event.target.closest('.mini-poster');
  if (posterToBeDeleted !== null) {
    for (var i = 0; i < savedPosters.length; i++) {
      if (savedPosters[i].id == posterToBeDeleted.id)  {
        savedPosters.splice(i, 1);
      }
    }
    posterToBeDeleted.remove();
  }
}

