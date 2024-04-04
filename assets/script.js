const path_img = './assets/images/slideshow/'
const arrow_right = document.getElementById("right")
const arrow_left = document.getElementById("left")
const banner_img = document.getElementsByClassName("banner-img")[0]
const banner_description = document.getElementById("banner_description")
const dot_banner_div = document.getElementById('dot-banner')




let index = 0

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


//integration des dots 
for (let span = 0; span < slides.length; span++){
	const span_dot = document.createElement('span')
	dot_banner_div.appendChild(span_dot)
	span_dot.className='dot'
	if (span == 0){
		span_dot.className='dot dot_selected'
	}
	span_dot.addEventListener('click', function(){
		img_obj = slides[span]
		banner_img.setAttribute("src", path_img + img_obj['image']);
		const dots = document.querySelectorAll('.dot')
		dots[index].classList.remove('dot_selected')
		span_dot.className='dot dot_selected'
		index = span
	})
}

const dots = document.querySelectorAll('.dot')
function slideSuivant(){
	dots[index].classList.remove('dot_selected')

	let img_obj = {}
	if (index < slides.length - 1){
		index++
	} else {
		index = 0
	}

	img_obj = slides[index]
	banner_img.setAttribute("src", path_img + img_obj['image']);
	banner_description.innerHTML = img_obj['tagLine'];
	dots[index].classList.add('dot_selected')
}

function slidePrecedente (){
	dots[index].classList.remove('dot_selected')
	let img_obj = {}
	if (index > 0){
		index--
	} else {
		index = slides.length - 1
	}

	img_obj = slides[index]
	banner_img.setAttribute("src", path_img + img_obj['image']);
	banner_description.innerHTML = img_obj['tagLine'];
	dots[index].classList.add('dot_selected')

}

arrow_right.addEventListener('click', slideSuivant)
arrow_left.addEventListener('click', slidePrecedente)


