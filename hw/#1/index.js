const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')

const case1 = box1.classList
const case2 = box2.classList
const case3 = box3.classList

box1.addEventListener('click', getCircle)
box2.addEventListener('click', getBlue)
box3.addEventListener('click', getOrangeCircle)

function getCircle() {
	if (case1.contains("circle")) {
		case1.remove('circle')
	} else {
		case1.add('circle')
	}
}

function getBlue() {
	if (case2.contains("orange")) {
		case2.remove('orange')
		case2.add('blue')
	} else {
		case2.remove('blue')
		case2.add('orange')
	}
}

function getOrangeCircle() {
	if (case3.contains("green")) {
		case3.remove('green')
		case3.add('orange')
		case3.add('circle')
	} else {
		case3.add('green')
		case3.remove('orange')
		case3.remove('circle')
	}
}