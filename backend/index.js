// writing basic express boilerplate code,
//with express.json() middleware
import {createTodo, updateTodo} from "./types.js";
const express = require("express");
const app = express();


// Middleware
app.use(express.json());

app.post("/toto", function(req, res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if(!parsedPayLoad.success){
      res.send(411).json(
        {
          msg: "Wrong Inputs", 
        }
      )
    }
})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
    const updatePayLoad = req.body;
    const parsedUPayLoad = updateTodo.safeParse(updatePayLoad);

    if(!parsedUPayLoad.success){
      res.send(411).json(
        {
          msg: "Wrong inputs",
        }
      )
    }
})