import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'


export function TodoApp() {
  const [todos, setTodos] = useState([]);

  
  // Fetch initial todos (if any) from the server
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (title, description) => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-type": "application/json"
      }
    })

    .catch(error => console.error('Error adding todo:', error));
 
  };

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
      console.log(fetchTodos);
  };

  const toggleComplete = (id, completed) => {
    fetch(`http://localhost:3000/todo/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(updatedTodo => {
      setTodos(prevTodos => {
        return prevTodos.map(todo => 
          todo._id === id ? { ...todo, completed } : todo
        );
      });
    })
    .catch(error => console.error('Error updating todo:', error));
  };

  return (
    <div className="app-container">
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} toggleComplete={toggleComplete} fetchTodos={fetchTodos}/>
    </div>
  );
}






