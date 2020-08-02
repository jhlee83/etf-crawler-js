const { crawler } = require("./index");

const express = require("express");

const app = express();
const port = 8080;

app.get("/", crawler);

app.listen(port, function (err) {
  console.log("Connected port" + port);
  if (err) {
    return console.log("Found error", err);
  }
});
