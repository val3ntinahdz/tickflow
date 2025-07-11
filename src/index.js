// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';

import { Todo, TodoList } from "./classes";
import { createNewTodo } from "./js/componentes";
import './styles.css';

const task = new Todo("Learn Node.js");

export const todoList = new TodoList();
todoList.newTodo(task);

console.log(task);
console.log(todoList);

createNewTodo(task);