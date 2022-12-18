import React, {useState,useEffect} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";
import Container from "@mui/material/Container";

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
        <Container sx={{m:2}}>
            <TodoInput setTodo={setTodo} addTodo={addTodo} todo={todo}/>
            <TodoList todos={todos} markCompleted={markCompleted}/>
        </Container>
    );

}

//onAddClick meegeven aan child component

export default TodoApp;