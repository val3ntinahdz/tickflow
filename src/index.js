// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import { createNewTodo } from "./js/componentes";
import './styles.css';
import { todoList } from "./classes/todo-list.instance";

// build the todo's stored in localStorage
todoList.todos.forEach(createNewTodo); // this approach only functions when we have only 1 element
console.log(todoList.todos);