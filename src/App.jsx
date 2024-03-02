import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import reactLogo from './assets/react.svg'
import './App.css'

import { ToDoList } from './ToDoList'

export default function App() {
  
  const [todos,setTodos] = useState(()=>{
    const localValue =localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue) 
  });
  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))},[todos]
  )
  //hooks: useEffect cant put it inside ifs or loops or after a return

  function addTodo(title){
       setTodos(currentTodos =>
        {return[
        ...todos,
        {id:crypto.randomUUID(),title:title,completed:false},
      ]})
  }
  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if (todo.id==id){
          return {...todo,completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id != id)
    })
  }



  console.log(todos);
  return (
    <div>
    <NewTodoForm onSubmit ={addTodo}/>
    <h1 className='header'>To do List</h1>
    
   <ToDoList 
   todos={todos}
   toggleTodo ={toggleTodo}
   deleteTodo ={deleteTodo}
   />
    </div>
  )
  
}