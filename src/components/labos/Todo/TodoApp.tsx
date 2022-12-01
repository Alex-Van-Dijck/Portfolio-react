import React, {useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export interface TodoItem { 
    name: string;
    completed: boolean;
}

const TodoApp = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <TodoInput setTodo={setTodo} addTodo={addTodo} todo={todo}/>
            <TodoList todos={todos} markCompleted={markCompleted}/>
        </div>
    );

}

//onAddClick meegeven aan child component

export default TodoApp;