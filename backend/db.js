const mongoose = require("mongoose")

// create schema
// todo {
//   title: string,
//   description: string,
//   completed: boolean
// }

mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(()=> console.log("MongoDb connected"))
  .catch((err) => {console.log("MongoDb Error")}) 

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo
}