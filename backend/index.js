// writing basic express boilerplate code,
//with express.json() middleware
const {createTodo, updateTodo} = require( "./types.js");
const { todo } = require("./db.js")
const express = require("express");
const cors = require ('cors');
const app = express();


// Middleware
app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if(!parsedPayLoad.success){
      res.status(411).json(
        {
          msg: "Wrong Inputs", 
        }
      )
    }

    try {
      await todo.create({
          title: createPayLoad.title,
          description: createPayLoad.description,
          completed: false
      });

      // If todo creation is successful, return a 201 response with a success message
      res.status(201).json({ 
          message: "Todo created successfully", 
          todo: todo 
      });
    } 
    catch (error) {
      // If there's an error during todo creation, return a 500 response with the error details
      res.status(500).json({ 
          message: "An error occurred while creating the todo", 
          error: error.message 
      });
    }
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    return res.json(todos);
})

// dynamic route ~ GET /api/users/:id
app.get("/todos/:id", async (req, res) => {
  // get id //now we have to find id in the json file.
  const todosId = await todo.findById(req.params.id);
  if (!todosId) return res.status(404).json({ msg: "Not found" });
  return res.json(todosId);
});

app.put("/todo/:id", async function(req, res){
    const updatePayLoad = req.body;
    const parsedUPayLoad = updateTodo.safeParse(updatePayLoad);

    if(!parsedUPayLoad.success){
      res.status(411).json(
        {
          msg: "Wrong inputs",
        }
      )
    }

    try {
      const updatedTodo = await todo.updateOne(
        { _id: req.params.id },
        { completed: req.body.completed }
      );
  
      if (updatedTodo.nModified === 0) {
        return res.status(404).json({ msg: "Todo not found or already updated" });
      }
  
      res.json({ msg: "Marked as completed" });
    } catch (error) {
      console.error("Error updating todo:", error);
      res.status(500).json({ msg: "Internal server error" });
    }
})

app.listen(3000);