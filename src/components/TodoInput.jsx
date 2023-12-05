import React, {useState, useContext} from "react"
import {GlobalContext} from "../context/ThemeContext"

const TodoInput = () => {
	const [todo, setTodo] = useState("")
	const [todos, setTodos] = useState([])
	const {currentTheme, updateStats} = useContext(GlobalContext) // Destructure updateStats from the context

	const handleSubmit = (e) => {
		e.preventDefault()

		// Update the todos state with the new todo
		if (todo.trim() !== "") {
			setTodos([...todos, {text: todo, done: false}]);
			setTodo("") // Clear the input field after adding todo

			// Calculate new stats
			const newStats = {
				all: todos.length + 1,
				todo: todos.length + 1,
				done: 0,
			}

			// Update stats using the context function
			updateStats(newStats)
		}
	}


	const handleCheckboxChange = (index) => {
		// Toggle the "done" property of the corresponding todo
		const updatedTodos = todos.map((todo, i) =>
			i === index ? {...todo, done: !todo.done} : todo
		)

		// Update the todos state
		setTodos(updatedTodos)

		// Update the counts in stats
		const newStats = {
			todo: updatedTodos.filter((todo) => !todo.done).length,
			done: updatedTodos.filter((todo) => todo.done).length,
			all: updatedTodos.length,
		};

		// Update stats using the context function
		updateStats(newStats);
	}

	return (
		<div className={currentTheme === "dark" ? "dark" : "light"}>
			<div className="todo-wrapper">
				<div className="box-list">
					{todos.map((todoItem, index) => (
						<div key={index}>
							<input
								type="checkbox"
								value={todoItem.done}
								onChange={() => handleCheckboxChange(index)}
							/>
							{todoItem.text}
							<hr />
						</div>
					))}
				</div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="What needs to be done?"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>

					<button type="submit">+</button>
				</form>
			</div>
		</div>
	)
}

export default TodoInput
