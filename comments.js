// Create web server and listen on port 3000
// This file is the entry point for the server

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

// Middleware
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/status", (req, res) => {
  res.send({
    message: "hello world!",
  });
});

app.post("/register", (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered!`,
  });
});

app.post("/login", (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was logged in!`,
  });
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});