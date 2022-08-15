import React from 'react'
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

const Home = () => {
	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2x1 font-bold text-center mb-10'>TODOS REACT</h1>

			{todoData.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	)
}

export default Home
