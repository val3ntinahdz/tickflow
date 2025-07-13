// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';

import { Todo, TodoList } from "./classes";
import { createNewTodo } from "./js/componentes";
import './styles.css';

export const todoList = new TodoList();

// build the todo's stored in localStorage
todoList.todos.forEach(createNewTodo); // this approach only functions when we have only 1 element