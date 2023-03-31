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

let index=0
const image= document.getElementsByClassName("banner-img")[0]
const goNextButton = document.getElementById("arrow_right")
const goBackButton = document.getElementById("arrow_left")

const goNext = () => {
    index=index+1
    image.src="./assets/images/slideshow/"+ slides[index].image
    //tag.innerHTML=//
}

const goBack = () => {
    index=index-1
    console.log(index)
    image.src="./assets/images/slideshow/"+ slides[index].image
}

goNextButton.addEventListener("click", goNext, false)

goBackButton.addEventListener("click", goBack, false)

