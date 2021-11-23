const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')

const { Server } = require("socket.io");
const { Socket } = require('net');
const server = http.createServer(app);

const io = new Server(server ,{
  cors:{
    origin:"http://localhost:3000",
    method: "GET",
  }
})

io.on("connection" , (socket) => {
  console.log(`user connection`,socket.id )

  socket.on ("joinRoom" ,(data) => {
    socket.join(data)
    console.log(`user with id ${socket.id} join room: ${data}`);
  })

  socket.on("disconnect" ,() => {
    console.log("user Disconnected" , socket.id);
  })
})




app.use(cors());


server.listen(8080 , () => {
  console.log('listening on http://localhost:8080')
})