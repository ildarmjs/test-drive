const form = document.querySelector('#form')
const list = document.querySelector('#list')
form.addEventListener('submit', createText)
console.log(form);
const textArr = []

function createText(event) {

	event.preventDefault()
	const input = document.querySelector('input')

	let li = document.createElement('li')
	if(!input.value) {
		return 
	} else {
		li.innerHTML = `${input.value}`
		list.append(li)
		input.value = ''
	}

}
