// index.js

const fs = require('fs');
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const activites = require("./activities.json");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function(req,res) {
  fs.writeFile(__dirname + "/data.txt", req.body.activity, function() {
    res.send("投稿完了");
  });
});

app.post("/update", function(req, res) {
  activites[0].activity = req.body.updatedActivity;
  res.send(activites);
});

app.post("/delete", function(req, res) {
  activites.splice(req.body.number, 1);
  res.send(activites);
});

app.listen(5000, function() {
  console.log("Listening on localhost port 5000");
});