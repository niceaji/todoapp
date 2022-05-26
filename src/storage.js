const key = 'todos';

function set(todos) {
  window.localStorage.setItem(key, JSON.stringify(todos));
}

function get() {
  const localTodos = window.localStorage.getItem(key) || '[]';
  const parsedTodos = JSON.parse(localTodos);

  return parsedTodos;
}
export { set, get };
