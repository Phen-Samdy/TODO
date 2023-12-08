import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

function TodoList({todos,handleAddTodo,handleDeleteTodo}) {
  return (
    <div className='todos-list'>
        {todos.map((todo)=>
            <Todo
                id={todo.id}
                title={todo.title}
                text={todo.text}
                handleDeleteTodo={handleDeleteTodo}
            />
        )}
        <AddTodo handleAddTodo={handleAddTodo}/>
    </div>
  )
}

export default TodoList