const body = document.getElementById("gradient")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const header = document.querySelector("h3")
const button = document.querySelector("button")

const setGradient = () => {
	body.style.background = "linear-gradient(to right," + `${color1.value}, ${color2.value})`
	header.textContent = body.style.background + ";"
}

const getRandomGradient = () => {
	let r =  Math.floor(Math.random() * 256), 
	g = Math.floor(Math.random() * 256), 
	b =  Math.floor(Math.random() * 256)
	return `rgb(${r}, ${g}, ${b})`
}

const setRandomGradient = () => {
	body.style.background = "linear-gradient(to right, " + `${getRandomGradient()}, ${getRandomGradient()}`
	header.textContent = body.style.background + ";"
}

const copy = () => {
	const cb = navigator.clipboard
	cb.writeText(header.innerText).then(() => alert("Copied!"))
}

document.querySelector("#copy").addEventListener("click", copy)
button.addEventListener("click", setRandomGradient)
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
