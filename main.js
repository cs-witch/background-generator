const body = document.getElementById("gradient")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const header = document.querySelector("h3")

const setGradient = () => {
	body.style.background = "linear-gradient(to right," + `${color1.value}, ${color2.value})`
	header.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
