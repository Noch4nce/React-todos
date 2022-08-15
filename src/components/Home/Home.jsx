import React from 'react'
import TodoItem from './TodoItem'

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

const Home = () => {
	return (
		<div className="bg-gray-900 h-screen text-white">
			{todoData.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	)
}

export default Home
