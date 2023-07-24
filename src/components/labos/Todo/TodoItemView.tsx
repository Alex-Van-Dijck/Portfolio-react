import React from "react";
import { TodoItem } from "./TodoList";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@mui/material";

interface ITodoItemProps {
	todo: TodoItem;
	markCompleted: (index: number, completed: boolean) => void;
	index: number;
}

const TodoItemView = ({ todo, markCompleted, index }: ITodoItemProps) => {
	const theme = useTheme();

	return (
		<div style={{ display: "block" }} key={index}>
			<Checkbox
				checked={todo.completed}
				onChange={(event) => markCompleted(index, event.target.checked)}
			/>
			<span
				style={{
					textDecoration: todo.completed ? "line-through" : "none",
					textAlign: "justify",
					color: theme.palette.text.primary,
				}}
			>
				{todo.name}
			</span>
		</div>
	);
};

export default TodoItemView;
