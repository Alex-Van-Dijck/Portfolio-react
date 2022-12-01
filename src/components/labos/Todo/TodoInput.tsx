import React from "react";

interface ITodoInputProps{
    setTodo:(todo:string)=>void,
    addTodo:(todo: string)=>void,
    todo:string
}

const TodoInput = ({setTodo,addTodo,todo}:ITodoInputProps) =>{
    return(
        <div>
            <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button onClick={() => addTodo(todo)}>Add</button>
        </div>
    )
}

export default TodoInput;