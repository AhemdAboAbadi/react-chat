import React, { useState } from 'react';

function Chat({ socket, userName, room }) {
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageDta = {
        room: room,
        userName: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit('sendMessage', messageDta);
    }
  };

  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey ..."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
