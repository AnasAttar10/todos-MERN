const express = require("express");
const router = express.Router();
let Todos = require("../models/Todo");

router.get("/Todos", (req, res) => {
  Todos.find({}, function (err, todos) {
    if (todos == null) {
      todos = [];
      console.log(todos);
    }
    
    res.send(todos);
  });
});

router.put("/todo/:id" , async(req ,res) =>{
  const { id } = req.params;
  
  const {completed} = req.body;

  const updatedTodo = await Todos.findByIdAndUpdate(id, { $set: { completed:completed } }, {
    new: true,
    runValidators: true,
  });

  res.send(updatedTodo);
})

router.post("/todo", (req, res) => {
  let newTodo = { ...req.body };
  console.log(newTodo);
  let t1 = new Todos(newTodo);
  t1.save();
  res.send(t1);
});

router.delete("/todo/:id", (req, res) => {
  let id = req.params.id;
  Todos.findOne({ _id: id }, function (error, todo) {
    console.log("This todo will get deleted !" + todo.title);
    todo.remove();
    res.send(todo);
  });
});

module.exports = router;
