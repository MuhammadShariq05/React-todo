const mongoose = require("mongoose")

// create schema
// todo {
//   title: string,
//   description: string,
//   completed: boolean
// }
// mongodb://localhost:27017/todos
mongoose.connect("mongodb://localhost:27017/todos")
const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean
})

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo
}