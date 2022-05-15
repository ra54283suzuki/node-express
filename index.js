// index.js

const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>こんにちはの見出し</h1>");
});

app.listen(5000, function() {
  console.log("Listening on localhost port 5000");
});