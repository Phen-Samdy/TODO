import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Todo({id, title, text, handleDeleteTodo,handleUpdate}) {
  return (
    <div className='todo'>
        <h2 className='title'>{title}</h2>
        <p className='text'>{text}</p>
        <div className='todo-footer'>
            <FaRegTrashAlt 
                 className='delete-icon' 
                 onClick={()=>handleDeleteTodo(id)}
            />
            <FaEdit onClick={()=>handleUpdate}/>

        </div>
    </div>
  )
}

export default Todo