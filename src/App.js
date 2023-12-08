import { useEffect, useState } from 'react';
import './App.css';
import {nanoid} from 'nanoid'
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import ReadTodo from './components/ReadTodo';

function App() {
  const [todos,setTodos] = useState([])

  const [readTodo, setReadTodo] = useState('');

  useEffect(() => {
		const savedTodos = JSON.parse(
			localStorage.getItem('todo-data')
		);

		if (savedTodos) {
			setTodos(savedTodos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'todo-data',
			JSON.stringify(todos)
		);
	}, [todos]);
//---add-todo--
  const addTodo =(title, text)=>{
    const newTodo = {
      id: nanoid(),
      title: title,
      text: text,
    };
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

//--delete todo --
  const deleteTodo = (id)=>{
    const newTodos = todos.filter((todo)=>todo.id !==id );
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar/>
      <ReadTodo handleReadTodo={setReadTodo}/>
      <div className='container'>
        <TodoList 
          todos={todos.filter((todo)=>
            todo.title.toLocaleLowerCase().includes(readTodo)
          )}
          handleAddTodo={addTodo}
          handleDeleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
