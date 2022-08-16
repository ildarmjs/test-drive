const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const normal = document.querySelector('#normal')
const bold = document.querySelector('#bold')
const italic = document.querySelector('#italic')
const content = document.querySelector('#content')


const styles = window.getComputedStyle(content)
let fontSize = styles.fontSize
fontSize = 20

minus.addEventListener('click', e => {
	fontSize--
	content.style.fontSize = fontSize + 'px'
})
plus.addEventListener('click', e => {
	fontSize++
	content.style.fontSize = fontSize + 'px'
})
normal.addEventListener('click', e => {
	content.style.fontWeight = 'normal'
	content.style.fontStyle = 'normal'

})
bold.addEventListener('click', e => {
	content.style.fontWeight = 'bold'
})
italic.addEventListener('click', e => {
	content.style.fontStyle = 'italic'
})
