const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideNmb = 0;

for (let i = 0; i < slides.length; i++) {
	let dots = document.querySelector('.dots');
	let dot = document.createElement("div");
	dot.className = "dot dotIndiv"+i;
	if ( i === 0 ){dot.className = "dot " + "dotIndiv"+i + " dot_selected"}
	dots.appendChild(dot);
}

let bannerImage = document.querySelector('.banner-img')
let bannerText = document.querySelector('.banner-text')

function ChangeSlide() {
	bannerImage.src = './assets/images/slideshow/${slides[slideNmb].image';
	bannerText.innerHTML = slides[slideIndex].tagLine;
}

let leftArrow = document.getElementById("arrow_left");
	leftArrow.addEventListener("click", function () {
		console.log("Vous avez cliquez sur la flèche de gauche")
	});

let rightArrow = document.getElementById("arrow_right");
	rightArrow.addEventListener("click", function () {
		console.log("Vous avez cliquez sur la flèche de droite")
	});