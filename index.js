// index.js

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function(req,res) {
  console.log("reqの中身", req.body);
});

app.listen(5000, function() {
  console.log("Listening on localhost port 5000");
});