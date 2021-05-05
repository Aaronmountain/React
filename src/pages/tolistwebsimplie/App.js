import React, { useEffect, useRef, useState } from 'react'
import ToDoList from './ToDoList.js'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('todosApp'))
    if (localStorageData) setTodos(localStorageData)
  }, [])

  useEffect( () =>
  {
    localStorage.setItem('todosApp',JSON.stringify(todos))
  },[todos])

  function handlerClearTodos()
  {
    // 打勾代表true 因此將打勾的用驚嘆表改成 false ，filter將 false的抽出來，setTodos(放進新陣列扣除掉已經打勾的)
    const newTodos = todos.filter( todo => !todo.complete )
    setTodos(newTodos)
  }

  function ToggleToDos(id)
  {
    // 一樣先複製陣列
    const newTodos = [...todos]
    // 找出Todo component 中，id一樣的將他 complete變成true，就變成打勾的狀態
    const todo = newTodos.find( todo => todo.id === id)
    todo.complete = !todo.complete
    // setTodos(新陣列)
    setTodos(newTodos)
  }

  function addTodo(){
    const id = new Date().getTime().toString()
    const name = todoNameRef.current.value
    if(name === '') return alert('ohoh')
    setTodos( prev =>
    {
      return [...prev, { id: id, name: name, complete:false}]
    })
    // 利用 useRef 來取得input 中的 value，若是點擊按鈕後，自動清空所以設定為null，
    todoNameRef.current.value = null;
  }
  return (
    <div>
      <ToDoList todos={todos} ToggleToDos={ToggleToDos}/>
      <input type="text" ref={ todoNameRef }/>
      <button onClick={ addTodo }>Add ToDo</button>
      <button onClick={handlerClearTodos}>Clear Completed ToDo</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  )
}

export default App
