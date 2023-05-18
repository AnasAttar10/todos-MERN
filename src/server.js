const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/todoDB", {
  useNewUrlParser: true,
}).then(res => console.log(" connection done "))
.catch(err => console.log("there is error "+ err ))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
const api = require("./server/routes/api");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", api);

const port = 8000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
