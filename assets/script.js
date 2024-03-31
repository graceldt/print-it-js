const path_img = './assets/images/slideshow/'
const arrow_right = document.getElementById("right")
const arrow_left = document.getElementById("left")
const banner_img = document.getElementsByClassName("banner-img")[0]
const banner_description = document.getElementById("banner_description");
const dots = document.querySelectorAll('.dot')


console.log(dots)
let count = 0

const slides =[
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
console.log(slides.length)
//il y a 4 éléments dans mon tableau


function slideSuivant(){
	dots[count].classList.remove('dot_selected')

	let img_obj = {}
	if (count < slides.length - 1){
		count++
	} else {
		count = 0
	}

	img_obj = slides[count]
	banner_img.setAttribute("src", path_img + img_obj['image']);
	banner_description.innerHTML = img_obj['tagLine'];
	dots[count].classList.add('dot_selected')
}

function slidePrecedente (){
	dots[count].classList.remove('dot_selected')
	let img_obj = {}
	if (count > 0){
		count--
	} else {
		count = slides.length - 1
	}

	img_obj = slides[count]
	banner_img.setAttribute("src", path_img + img_obj['image']);
	banner_description.innerHTML = img_obj['tagLine'];
	dots[count].classList.add('dot_selected')

}

arrow_right.addEventListener('click', slideSuivant)
arrow_left.addEventListener('click', slidePrecedente)


