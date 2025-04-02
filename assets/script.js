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

for (let i = 0; i < slides.length; i++) {
  let dots = document.querySelector(".dots");
  let dot = document.createElement("div");
  dot.className = "dot dot" + i;
  if (i === 0) {
    dot.className = "dot " + "dot" + i + " dot_selected";
  }
  dots.appendChild(dot);
}

let bannerImage = document.querySelector(".banner-img");
let bannerText = document.querySelector(".banner-text");

function ChangeSlide() {
  bannerImage.src = `./assets/images/slideshow/${slides[slideNmb].image}`;
  bannerText.innerHTML = slides[slideNmb].tagLine;
}

let leftArrow = document.getElementById("arrow_left");
leftArrow.addEventListener("click", function () {
  slideNmb--;

  if (slideNmb < 0) {
	slideNmb = slides.length-1;
  }

  let dotSelected = document.querySelector(".dot_selected");
  dotSelected.className = "dot dot" + (slideNmb + 1);

  if (slideNmb === slides.length - 1) {
    dotSelected.className = "dot dot0";
  }

  dotSelected = document.querySelector(".dot" + slideNmb);
  dotSelected.className = "dot " + "dot" + slideNmb + " dot_selected";

  ChangeSlide();
});

let rightArrow = document.getElementById("arrow_right");
rightArrow.addEventListener("click", function () {
  slideNmb++;

  if (slideNmb >= slides.length) {
	slideNmb = 0;
  }

  let dotSelected = document.querySelector(".dot_selected");
  dotSelected.className = "dot dot" + (slideNmb - 1);

  if (slideNmb === 0) {
    dotSelected.className = "dot dot" + (slides.length - 1);
  }

  dotSelected = document.querySelector(".dot" + slideNmb);
  dotSelected.className = "dot " + "dot" + slideNmb + " dot_selected";

  ChangeSlide();
});
