// render the items on screen
// pass me all the todos as an Array (object destructering) 
// so our todo array be like this
// todo = [
//      { 
//        Title:
//         Description: 
//         completed: 
//        }
//      ]
import React from 'react';
import './TodosStyles.css'

export function Todos({ todos }) {
  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => toggleComplete(todo._id, !todo.completed)}>
            {todo.completed ? "Completed" : "Mark as Complete"}
          </button>
          </div>
        ))}
      </div>
    </>
  );
}
