import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

function App() {
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');


  const joinRoom = () => {
    if (userName !== '' && room !== '') {
      
    }
  }



  return (
    <div className="App">
      <h3>Ahmed Chat</h3>
      <input type="text" placeholder="Hi Ahmed " onChange={(e) => {setUserName(e.target.value)}}/>
      <input type="text" placeholder="Room ID ... "  onChange={(e) => {setRoom(e.target.value)}}/>
      <button>Join A Room</button>
    </div>
  );
}

export default App;
