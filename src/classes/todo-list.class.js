export class TodoList {
    constructor() {
        this.todos = [];
        console.log(" here is the todo list class");
    }

    newTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(id) {
        if (this.id != id) {

        }
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
        if (!this.todos.completed) {
            this.todos.filter(task => !task.completed)
        }
        
    }
}