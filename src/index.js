import { log } from './utils';
import { printTodos } from './print-todos';
import './todos.css';

const todos = [
  { title: 'HTML', isDone: true },
  { title: 'JS', isDone: true },
  { title: 'React', isDone: true },
];

const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');

const checkTodo = (event) => {
  event.preventDefault();
  console.log($input.value);

  // todo 추가
  const todo = { title: $input.value, isDone: false };
  todos.push(todo);
  console.log(todos);

  // input 초기화
  $input.value = '';

  // todos 출력
  print();
};

const deleteTodo = (index) => {
  console.log('delete', index);
  // todos에서 index번째 todo 삭제
  todos.splice(index, 1);
  print();
};
const toggleTodo = () => {
  console.log('toggle');
};

const print = () => {
  printTodos(todos);
};
//
// 폼,input 입력 이벤트 추가하기
// 입력했을때 todo추가
$form.addEventListener('submit', checkTodo);

// 삭제,isDone
document.body.addEventListener('click', (event) => {
  const index = parseInt(event.target.parentNode.dataset.index, 10);
  if (event.target.className === 'delete') {
    deleteTodo(index);
  } else if (event.target.className === 'toggle-checked') {
    toggleTodo(index);
  }
});

// todos 출력
print();
