import { useEffect, useRef, useState } from 'react';

import socket from 'utility/chatSoket';
import { ChatContainer, MessageForm } from './MessangerChat.styled';

export default function MessangerChat({
  users,
  messages,
  userName,
  roomId,
  onAddMessage,
}) {
  const [messageValue, setMessageValue] = useState('');
  const messagesRef = useRef(null);
  console.log(messages);

  const onSendMessage = e => {
    e.preventDefault();
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({ userName, text: messageValue });
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <>
      <div>
        <ChatContainer className="chat-container">
          <main className="chat-main">
            <div className="chat-sidebar">
              <h2 id="room-name">chat: {roomId}</h2>
              <h3>
                <i className="fas fa-user"></i> Online ({users.length})
              </h3>
              <ul id="users">
                {users.map((name, index) => (
                  <li key={name + index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="chat-messages" ref={messagesRef}>
              {messages.map((message, index) => (
                <div
                  className="chat-messages message"
                  key={message.userName + index}
                >
                  <p className="meta">
                    {message.userName}
                    <span>1 sec</span>
                  </p>
                  <p className="text">{message.text} </p>
                </div>
              ))}
            </div>
          </main>

          <div className="chat-form-container">
            <MessageForm onSubmit={e => onSendMessage(e)} id="chat-form">
              <input
                id="msg"
                type="text"
                placeholder="Type a Message"
                required
                value={messageValue}
                onChange={e => setMessageValue(e.target.value)}
              />
              <button
                type="submit"
                className="btn-plane"
                // onClick={e => onSendMessage(e)}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </MessageForm>
          </div>
        </ChatContainer>
      </div>
    </>
  );
}
