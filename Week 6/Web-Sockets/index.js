//jshint esversion:8

const express = require("express");
const { Server } = require("socket.io");

const app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

const io = new Server(server);

io.on("connection", socket => {
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});
