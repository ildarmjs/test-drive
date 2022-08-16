const content = document.querySelector('#content')


const todos = [
	{ title: 'Выучить JavaScript', dataType: 'js', type: 'checkbox', done: true },
	{ title: 'Попрактиковаться с Git', dataType: 'git', type: 'checkbox', done: true },
	{ title: 'Изучить React', dataType: 'react', type: 'checkbox', done: true },
	{ title: 'Понять NodeJS', dataType: 'node', type: 'checkbox', done: false },
	{ title: 'Устроиться на работу', dataType: 'job', type: 'checkbox', done: false },
]

if (todos.length === 0) {
	content.innerHTML = '<p class "empty">Технологий пока нет. Добавьте первую</p>'
} else {
	content.innerHTML = todos.map(toCard).join('')
}

function toCard(tech) {
	const doneClass = tech.done ? 'checked' : ''
	return `
		<li>
			<label data-type="${tech.dataType}">
				<input type="checkbox" ${doneClass} /> ${tech.title}
			</label>
		</li>	`
}