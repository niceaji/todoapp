const $todos = document.querySelector('#todos');

const printTodos = (todos) => {
  const html = todos.map((todo, index) => {
    return `
		<li data-index="${index}">
			<button class="delete">×</button>
			<input type="checkbox" class="toggle-checked" />
			<span class="text">${todo.title}</span>
		</li>
		`;
  });

  $todos.innerHTML = `<ul>${html.join('')}</ul>`;
};

export { printTodos };
