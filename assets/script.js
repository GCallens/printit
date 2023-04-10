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

const createBulletPoint = (index) => {
    const bulletPointContainer = document.getElementsByClassName("dots")[0]
    while (bulletPointContainer.firstChild) {
        bulletPointContainer.firstChild.remove()
    }
    for (let i = 0; i < slides.length; i++ ) {
        const bulletPoint = document.createElement("div")
        if (i === index) {
            bulletPoint.className="dot dot_selected"
        } else {
            bulletPoint.className="dot"
        }
        bulletPointContainer.appendChild(bulletPoint)
    }
}

createBulletPoint(0)

let index = 0
const image = document.getElementsByClassName("banner-img")[0]
const tag = document.getElementById("tagLine");
const goNextButton = document.getElementById("arrow_right")
const goBackButton = document.getElementById("arrow_left")

const goNext = () => {
    if (index < slides.length - 1) {
        console.log(index)
        index = index + 1
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML=slides[index].tagLine
    } else {
        console.log(index)
        index = 0
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML=slides[index].tagLine
    }
}

const goBack = () => {
    if (index > 0) {
        console.log(index)
        index = index - 1
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML=slides[index].tagLine
    } else {
        console.log(index)
        index = slides.length - 1
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML=slides[index].tagLine
    }
}

goNextButton.addEventListener("click", goNext, false)
goBackButton.addEventListener("click", goBack, false)



// Message //
