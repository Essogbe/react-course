import  {useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
export function NewTodoForm(props){
    
    const [newItem, setItem]=useState("");


    function handleSubmit(e){
      e.preventDefault();
        if (newItem === "") return

        props.onSubmit(newItem)
      setItem("")
    }
      
    return (
        
        <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <input 
        type="text"  
        value={newItem} 
        onChange={e => setItem(e.target.value)} 
        id="item" 
        />

      </div>
      <button className='btn'>Add</button>
    </form>
    
   
    )
    }