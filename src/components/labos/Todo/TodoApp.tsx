import React, {useState,useEffect} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";

export interface TodoItem { 
    name: string;
    completed: boolean;
}

const TodoApp = () => {

    useEffect(() => {
        document.title = 'Todo';
      }, []);
    
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
        <div className={styles.AppContainer}>
            <TodoInput setTodo={setTodo} addTodo={addTodo} todo={todo}/>
            <TodoList todos={todos} markCompleted={markCompleted}/>
        </div>
    );

}

//onAddClick meegeven aan child component

export default TodoApp;