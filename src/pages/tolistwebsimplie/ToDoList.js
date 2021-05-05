import React from 'react'
import Todo from './Todo.js'

function ToDoList({ todos, ToggleToDos } ) {

  return (
    todos.map( todo =>
      {
      return <Todo key={todo.id} ToggleToDos={ToggleToDos} todo={todo} />
      })
  )
}

export default ToDoList