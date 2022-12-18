import React from "react";
import { TodoItem } from "./TodoList";
import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

interface ITodoItemProps{
    todo:TodoItem,
    markCompleted:(index: number, completed: boolean)=>void,
    index:number
}

const TodoItemView = ({todo,markCompleted,index}:ITodoItemProps) =>{


    return(
        <div style={{display:'block'}} key={index}>
            <Checkbox checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none", textAlign:'justify'}} >{todo.name}</span>
        </div>
        
                        
        
    )
}

export default TodoItemView;