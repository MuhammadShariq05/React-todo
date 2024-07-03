import { useState } from 'react';
import './TodoStyles.css';
export function CreateTodo({ addTodo }){

  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="todo-container">
        <input type="text" placeholder="title" onChange={function(e){
          const value = e.target.value;
          setTitle(e.target.value)
        }}></input><br />
        <input type="text" placeholder="description" onChange={function(e){
          const value = e.target.description;
          setDescription(e.target.description)
        }}></input><br />
        <button onClick={() => {
          addTodo(title, description);
          setTitle("");
          setDescription("");
        }}>Add a todo</button>
      </div>
    </>
  )
}

