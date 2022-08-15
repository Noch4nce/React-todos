import React, { useState } from 'react'
import TodoItem from './item/TodoItem'

const todoData = [
	{
		id: 1,
		title: 'Finish',
		isCompleted: false
	},
	{
		id: 2,
		title: 'Start',
		isCompleted: false
	},
	{
		id: 3,
		title: 'React',
		isCompleted: false
	}
]
console.log(todoData, 'ID')

const Home = () => {
	const [todos, setTodos] = useState(todoData)

	const changeTodo = (id) => {
		const copy = [...todos]

		const current = copy.find((todo) => todo.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	return (
		<div className="text-white w-4/5 mx-auto">
			<h1 className="text-2x1 font-bold text-center mb-10">
				TODOS REACT
			</h1>

			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} />
			))}
		</div>
	)
}

export default Home
