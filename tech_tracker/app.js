const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
const backdrop = document.querySelector('#backdrop')
const progress = document.querySelector('#progress')
const form = document.querySelector('#form')

const APP_TITLE = document.title
const LS_KEY = 'MY TECHS'

content.addEventListener('click', openCard)
backdrop.addEventListener('click', closeModal)
form.addEventListener('submit', createTech)
modal.addEventListener('change', toggleTech )

const techonologies = getState()

function openCard(event) {
	const data = event.target.dataset
	const tech = techonologies.find(t => t.type === data.type)
	if (!tech) return

	openModal(toModal(tech), tech.title)
}
function toModal(tech) {
	const checked = tech.done ? 'checked' : ''
	return `
			<h2>${tech.title}</h2>
			<p>${tech.description}</p>
			<hr />
			<div>
				<input type="checkbox" id="done" ${checked} data-type ="${tech.type}" />
				<label for="done">Выучил</label>
			</div>
		`
}

function toggleTech(event) {
	const type = event.target.dataset.type
	const tech = techonologies.find(t => t.type === type)
	tech.done = event.target.checked
	saveState()

	init()
}

function openModal(html, title = APP_TITLE) {
	document.title = `${title} | ${APP_TITLE}`
	modal.innerHTML = html
	modal.classList.add('open')
}

function closeModal() {
	document.title = APP_TITLE
	modal.classList.remove('open')
}

function init() {
	renderCards()
	renderProgress()
}

function renderCards() {
	if (techonologies.length === 0) {
		content.innerHTML = '<p class "empty">Технологий пока нет. Добавьте первую</p>'
	} else {
		content.innerHTML = techonologies.map(toCard).join('')
	}
}

function renderProgress() {
	const persent = computeProgressPercent()

	let background
	if (persent <= 30) {
		background = '#e75a5a'
	} else if (persent > 30 && persent < 70) {
		background = '#f99415'
	} else {
		background = '#73ba3c'
	}

	progress.style.background = background
	progress.style.width = persent + '%'
	progress.textContent = persent ? persent + '%' : ''
}

function computeProgressPercent() {
	if (techonologies.length === 0) {
		return 0
	}
	let doneCount = 0
	for (let i = 0; i < techonologies.length; i++) {
		if (techonologies[i].done) doneCount++
	}
	return Math.round((100 * doneCount) / techonologies.length)
}

function toCard(tech) {
	const doneClass = tech.done ? 'done' : ''
	return `
		<div class="card ${doneClass}" data-type="${tech.type}">
			<h3 data-type="${tech.type}">${tech.title}</h3>
		</div>
	`
}
function isInvalid(title,description) {
	return !title.value || !description.value
}

function createTech(event) {
	event.preventDefault()

	const{title, description} = event.target
	if(isInvalid(title, description)) {
		if(!title.value) title.classList.add('invalid')
		if(!description.value) description.classList.add('invalid')

		setTimeout(()=>{
			title.classList.remove('invalid')
			description.classList.remove('invalid')
		}, 2000)
		return
	}
	const newTech = {
		title: title.value,
		description: description.value,
		done: false,
		type: title.value.toLowerCase()

	}
	techonologies.push(newTech)
	title.value = ''
	description.value = ''
	saveState()

	init()
}

function saveState(){
	localStorage.setItem(LS_KEY, JSON.stringify(techonologies)) 
}
function getState(){
	const raw = localStorage.getItem(LS_KEY)
	return raw ? JSON.parse(raw) : []
}
 
init()