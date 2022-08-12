let countState = 0
const button = document.getElementById("counter-button")
const text = document.getElementById("counter-text")

function add() {
	countState++
	text.innerText = countState
}

button.addEventListener("click", add)