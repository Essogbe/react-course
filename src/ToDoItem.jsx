export function ToDoItem({completed,id,title,toggleTodo,deleteTodo,key }){

    return(
        <li>
      <label htmlFor="">
        <input type="checkbox" checked={completed} 
        onChange={e =>toggleTodo(id,e.target.checked)}
         name="" id="" />
        {title}
      </label>
      <button className='btn btn-danger' 
      
      onClick={()=>deleteTodo(id)}
      
      >

      </button>
    </li>
    )
}