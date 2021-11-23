import React, { useState, useEffect } from 'react';
import './App.css';

function Chat({ socket, userName, room }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

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
      setMessageList((list) => [...list, messageDta]);
    }
  };

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent) => {
          return (
            <div
              className="message"
              id={userName === messageContent.userName ? 'you' : 'other'}
            >
              <div className="message-content">
                <p>{messageContent.message}</p>
              </div>
              <div className="message-mete">
                <p id="time">{messageContent.time}</p>
                <p id="author">{messageContent.userName}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey ..."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={(ev) => {
            ev.key === 'Enter' && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
