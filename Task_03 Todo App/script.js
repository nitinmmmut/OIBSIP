
const form = document.querySelector('form');
const titleInput = form.querySelector('input:nth-of-type(1)');
const descInput = form.querySelector('input:nth-of-type(2)');
const todoList = document.querySelector('.todo-list');

let todos = [];

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (titleInput.value.trim() === '' || descInput.value.trim() === '') {
		alert('Please enter a title and description!');
		return;
	}
	const todo = {
		id: new Date().getTime(),
		title: titleInput.value.trim(),
		desc: descInput.value.trim()
	}
	todos.push(todo);
	renderTodos();
	form.reset();
});

function renderTodos() {
	todoList.innerHTML = '';
	for (const todo of todos) {
		const li = document.createElement('li');
		const span = document.createElement('span');
		const editBtn = document.createElement('button');
		const deleteBtn = document.createElement('button');
		li.dataset.id = todo.id;
		span.textContent = `${todo.title} - ${todo.desc}`;
		editBtn.textContent = 'Edit';
		editBtn.addEventListener('click', handleEdit);
		deleteBtn.textContent = 'Delete';
		deleteBtn.addEventListener('click', handleDelete);
		li.appendChild(span);
		li.appendChild(editBtn);
		li.appendChild(deleteBtn);
		todoList.appendChild(li);
	}
}

function handleEdit(e) {
	const li = e.target.parentElement;
	const id = parseInt(li.dataset.id);
	const todo = todos.find(todo => todo.id === id);
	const span = li.querySelector('span');
	span.innerHTML = `
		<input type="text" value="${todo.title}">
		<input type="text" value="${todo.desc}">
	
		<button style="margin-top: 10px;">Save</button>
	`;
	const saveBtn = span.querySelector('button');
	saveBtn.addEventListener('click', () => {
		const newTitle = span.querySelector('input:nth-of-type(1)').value.trim();
		const newDesc = span.querySelector('input:nth-of-type(2)').value.trim();
		if (newTitle === '' || newDesc === '') {
			alert('Please enter a title and description!');
			return;
		}
		todo.title = newTitle;
		todo.desc = newDesc;
		span.innerHTML = `${todo.title} - ${todo.desc}`;
	});
}

function handleDelete(e) {
	const li = e.target.parentElement;
	const id = parseInt(li.dataset.id);
	todos = todos.filter(todo => todo.id !== id);
	renderTodos();
}








