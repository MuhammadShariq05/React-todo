import './TodoStyles.css';
export function CreateTodo(){
  return (
    <>
      <div className="todo-container">
        <input type="text" placeholder="title" /><br />
        <input type="text" placeholder="description"/><br />

        <button>Add a todo</button>
      </div>
    </>
  )
}

