const text = document.querySelector("h3");
const panel = document.querySelector('#panel')
const styles = window.getComputedStyle(text);
let fontSize = parseInt(styles.fontSize);

panel.addEventListener('click', event => {
	const type = event.target.dataset.type
	if (type === 'minus') {
		fontSize--
		text.style.fontSize = fontSize + 'px'
	} else if (type === 'plus') {
		fontSize++
		text.style.fontSize = fontSize + 'px'
	} else if (type === 'normal') {
		text.style.fontStyle = 'normal'
		text.style.fontWeight = 'normal'
	} else if (type === 'bold') {
		text.style.fontWeight = 'bold'
	} else if (type === 'italic') {
		text.style.fontStyle = 'italic'
	} 
})