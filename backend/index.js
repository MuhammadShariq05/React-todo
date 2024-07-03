// writing basic express boilerplate code,
//with express.json() middleware

const express = require("express");
const app = express();

// Middleware
app.use(express.json());

app.post("/toto", function(req, res){

})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
  
})