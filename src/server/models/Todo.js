const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: String,
  completed :Boolean
});

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
