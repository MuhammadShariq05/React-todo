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
export function Todos({todos}){
    return(
      <>
        <div className="box">
          {todos.map(function(todo){
            return (
              <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true? "Completed" : "Mark as Complete"}</button>
              </div>
            )
          })}
        </div>
      </>
    )
}