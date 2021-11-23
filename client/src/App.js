import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect('http://localhost:3000');

function App() {
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (userName !== '' && room !== '') {
      socket.emit('joinRoom', room);
    }
  };

  return (
    <div className="App">
      <h3>Ahmed Chat</h3>
      <input
        type="text"
        placeholder="Hi Ahmed "
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Room ID ... "
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join A Room</button>
      <Chat socket={socket} userName={userName} room={room} />
    </div>
  );
}

export default App;
