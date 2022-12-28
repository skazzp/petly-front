import { useEffect, useRef, useState } from 'react';
import socket from 'utility/chatSoket';
import {
  ButtonSend,
  ChatContainer,
  Display,
  InputMassege,
  Label,
  MessageForm,
} from './MessangerChat.styled';

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
    <ChatContainer className="chat-container">
      <Display>
        <h2 id="room-name">chat: {roomId}</h2>
        <h3>
          <i className="fas fa-user"></i> Online ({users.length})
        </h3>
        <ul id="users">
          {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
        <div className="chat-messages" ref={messagesRef}>
          {messages.map((message, index) => (
            <div
              className="chat-messages message"
              key={message.userName + index}
            >
              <p>
                {message.userName}
                <span>1 sec</span>
              </p>{' '}
              <p>{message.text} </p>
            </div>
          ))}
        </div>
      </Display>

      <MessageForm onSubmit={e => onSendMessage(e)} id="chat-form">
        <Label>
          <InputMassege
            id="msg"
            type="text"
            placeholder="Type a Message"
            required
            value={messageValue}
            onChange={e => setMessageValue(e.target.value)}
          />
          <ButtonSend type="submit">Enter</ButtonSend>
        </Label>{' '}
      </MessageForm>
    </ChatContainer>
  );
}
