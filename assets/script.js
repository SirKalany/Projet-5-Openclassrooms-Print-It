const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slideNmb = 0;
let dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot", `dot${i}`);
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  dotsContainer.appendChild(dot);
}

let bannerImage = document.querySelector(".banner-img");
let bannerText = document.querySelector(".banner-text");

function changeSlide() {
  bannerImage.src = `./assets/images/slideshow/${slides[slideNmb].image}`;
  bannerText.innerHTML = slides[slideNmb].tagLine;
}

function updateDots() {
  document.querySelector(".dot_selected").classList.remove("dot_selected");
  document.querySelector(`.dot${slideNmb}`).classList.add("dot_selected");
}

let leftArrow = document.getElementById("arrow_left");
leftArrow.addEventListener("click", function () {
  slideNmb -= 1;
  if (slideNmb < 0) {
    slideNmb = slides.length - 1;
  }
  updateDots();
  changeSlide();
});

let rightArrow = document.getElementById("arrow_right");
rightArrow.addEventListener("click", function () {
  slideNmb += 1;
  if (slideNmb >= slides.length) {
    slideNmb = 0;
  }
  updateDots();
  changeSlide();
});
