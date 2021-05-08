import React from 'react'

function Todo({ todo, ToggleToDos } ) {
  function handlerTodoClick()
  {
    ToggleToDos(todo.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handlerTodoClick}/>
        {todo.name}
      </label>
    </div>
  )
}

export default Todo
