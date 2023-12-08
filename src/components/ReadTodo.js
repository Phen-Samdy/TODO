
import React from 'react'

function ReadTodo({handleReadTodo}) {
  return (
    <div className='read'>
        <input
            type='text'
            placeholder='Search...'
            onChange={(event)=>handleReadTodo(event.target.value)}
        />
    </div>
  )
}

export default ReadTodo