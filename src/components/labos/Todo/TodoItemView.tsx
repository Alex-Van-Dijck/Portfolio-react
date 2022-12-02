import React from "react";
import { TodoItem } from "./TodoList";
import Checkbox from '@mui/material/Checkbox';

interface ITodoItemProps{
    todo:TodoItem,
    markCompleted:(index: number, completed: boolean)=>void,
    index:number
}

const TodoItemView = ({todo,markCompleted,index}:ITodoItemProps) =>{

    return(
        <div key={index}>
            <Checkbox checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
        </div>
        
                        
        
    )
}

export default TodoItemView;