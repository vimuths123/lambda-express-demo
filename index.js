const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Express deployed from git!");
});

module.exports.handler = serverless(app);
