import { log } from './utils';
import { printTodos } from './print-todos';
import { init as initForm } from './form';
import './todos.css';

const todos = [];

const deleteTodo = (index) => {
  console.log('delete', index);
  // todos에서 index번째 todo 삭제
  todos.splice(index, 1);
  print();
};

const print = () => {
  printTodos(todos);
};
const toggleTodo = (index) => {
  console.log('toggle');
  // index에 맞는 todo.isDone 반전
  todos[index].isDone = !todos[index].isDone;
  print();
};

// 삭제,isDone
document.body.addEventListener('click', (event) => {
  const index = parseInt(event.target.parentNode.dataset.index, 10);
  if (event.target.className === 'delete') {
    deleteTodo(index);
  } else if (event.target.className === 'toggle-checked') {
    toggleTodo(index);
  }
});

initForm(todos);
// todos 출력
print();
