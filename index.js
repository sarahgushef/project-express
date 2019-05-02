const express = require("express")
const app = express()
const port = 5000

const todoList = require("./todolist")

// get data todoList from todolist.js
app.get("/todos", (req, res) => res.send(todoList))

// send data todoList to todolist.js
app.post("/todos", function(req, res) {
  todoList.push({ id: 2, todo: "makan nasi" })

  res.send("Todo has been added")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
