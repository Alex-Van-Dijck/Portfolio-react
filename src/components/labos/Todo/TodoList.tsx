import React from "react";
import TodoItemView from "./TodoItemView";
import styles from './Todo.module.css';
import { Container } from "@mui/material";

export interface TodoItem { 
    name: string;
    completed: boolean;
}


interface ITodoListProps{
    todos:TodoItem[],
    markCompleted: (index: number, completed: boolean) => void
}

const TodoList = ({todos,markCompleted}:ITodoListProps) =>{

    return(
        <Container>
                {todos.map((todo, index) => (
                   <TodoItemView todo={todo} index={index} markCompleted={markCompleted}/>
                ))}
        </Container>
    )

}

export default TodoList;