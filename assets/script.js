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

/* DÉFINIR INDEX = 0 */
let index = 0
/* ON VA CHERCHER LA BANNIERE */
const image = document.querySelector(".banner-img")
/* ON VA CHERCHER LE TEXTE */
const tag = document.getElementById("tagLine");
/* ON VA CHERCHER LA FLECHE */
const goNextButton = document.getElementById("arrow_right")
/* ON VA CHERCHER LA FLECHE */
const goBackButton = document.getElementById("arrow_left")


/* CREATION BULLET POINT */
const createBulletPoint = (index) => {
    const bulletPointContainer = document.querySelector(".dots")
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

/* CREATION DE LA FLECHE DE DROITE */
const goNext = () => {
    if (index < slides.length - 1) {
        index = index + 1
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML = slides[index].tagLine
    } else {
        index = 0
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML = slides[index].tagLine
    }
}

/* CREATION DE LA FLECHE DE GAUCHE */
const goBack = () => {
    if (index > 0) {
        index = index - 1
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML = slides[index].tagLine
    } else {
        index = slides.length - 1
        createBulletPoint(index)
        image.src="./assets/images/slideshow/"+ slides[index].image
        tag.innerHTML = slides[index].tagLine
    }
}

/* ON APPELLE LA FONCTION POUR CREER LES BULLETS POINTS */
createBulletPoint(0)

/* ON APPELLE LA FONCTION POUR AVOIR UN EVENEMENT AU CLIQUE SUR LES FLECHES */
goNextButton.addEventListener("click", goNext, false)
goBackButton.addEventListener("click", goBack, false)
