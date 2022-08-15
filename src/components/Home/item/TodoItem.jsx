import React from 'react'
import Check from './Check'

const TodoItem = ({ todo, changeTodo }) => {
	return (
		<button
			onClick={() => changeTodo(todo.id)}
			className="flex items-center mb-4 rounded-xl bg-zinc-800 p-5 w-full"
		>
			<Check isCompleted={todo.isCompleted} />
			{todo.title}
		</button>
	)
}

export default TodoItem
