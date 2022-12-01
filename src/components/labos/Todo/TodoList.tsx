import React from "react";
import TodoItemView from "./TodoItemView";

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
        <div>
                {todos.map((todo, index) => (
                   <TodoItemView todo={todo} index={index} markCompleted={markCompleted}/>
                ))}
        </div>
    )

}

export default TodoList;