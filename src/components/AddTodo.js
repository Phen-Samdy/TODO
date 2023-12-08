import React, { useState } from 'react'

function AddTodo({handleAddTodo}) {
    const [todoTitle,setTodoTitle] = useState();
    const [todoText, setTodoText] = useState();

    const handleChangeTitle=(event)=>{
            setTodoTitle(event.target.value)
    }
    const handleChangeText=(event)=>{
            setTodoText(event.target.value)
    }
//--Save--
    const handleSaveClick=()=>{
        if(todoText.trim().length>0){
            handleAddTodo(todoTitle,todoText);
            setTodoTitle('')
            setTodoText('')
        } 
    }
  return (
    <div className='todo new'>
        <textarea
            rows='3'
            cols='10'
            placeholder='Type to add todo title!!!'
            value={todoTitle}
            onChange={handleChangeTitle}
        />
        <textarea 
            rows = '20'
            cols = '10'
            placeholder='Type to add a todo text!!!'
            value={todoText}
            onChange={handleChangeText}
        ></textarea>
        <div>
            <button className='save' onClick={handleSaveClick}>Add Todo</button>
        </div>
    </div>
  )
}

export default AddTodo