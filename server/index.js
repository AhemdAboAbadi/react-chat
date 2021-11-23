const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')

const { Server } = require("socket.io")
const server = http.createServer(app);

const io = new Server(server ,{
  cors:{
    origin:"http://localhost:3000",
    method: "GET",
  }
})

io.on("connection" , (socket) => {
  console.log(`user connection`,socket.id )

  socket.on("disconnect" ,() => {
    console.log("user Disconnected" , socket.id);
  })
})




app.use(cors());


server.listen(8080 , () => {
  console.log('listening on http://localhost:8080')
})