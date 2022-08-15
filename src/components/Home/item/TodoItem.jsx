import React from 'react'
import Check from './Check'
import cn from 'classnames'

const TodoItem = ({ todo, changeTodo }) => {
	return (
		<button
			onClick={() => changeTodo(todo.id)}
			className="flex items-center mb-4 rounded-xl bg-zinc-800 p-5 w-full"
		>
			<Check isCompleted={todo.isCompleted} />
			<span className={cn({ 'line-through': todo.isCompleted })}>
				{todo.title}
			</span>
		</button>
	)
}

export default TodoItem
