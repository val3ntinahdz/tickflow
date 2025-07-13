export class TodoList {
    constructor() {
        this.todos = [];
        console.log(" here is the todo list class");
    }

    newTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        console.log(this.todos);
    }

    markAsCompleted(id) {
        for (const todo of this.todos) {
            console.log(id, todo.id)

            if (todo.id === id) {
                todo.completed = !todo.completed;
                break;
            }
        }

    }

    deleteAllCompleted() {
        this.todos.filter(task => !task.completed)
    }
}