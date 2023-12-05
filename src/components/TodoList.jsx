import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([])

  return (
      <div>
          <input
              type="checkbox"
              value='Create example app'
          />
            <input
                type="checkbox"
                value='Write blog post'
            /> 
          <input
              type="checkbox"
              value='Post on social media'
          />

    </div>
  )
}

export default TodoList