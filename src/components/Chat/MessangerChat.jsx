import { useEffect, useRef, useState } from 'react';
import socket from 'utility/chatSoket';
import {
  ButtonSend,
  ChatContainer,
  ChatName,
  ChatUsers,
  Display,
  InputMassege,
  Label,
  MessageForm,
  UserName,
  ChatInfo,
  ChatMessages,
  MassegeText
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
        <ChatInfo>
          <ChatName id="room-name">chat: {roomId}</ChatName>
          <ChatUsers> Online ({users.length})</ChatUsers>
          <ul id="users">
            {users.map((name, index) => (
              <UserName key={name + index}>{name}</UserName>
            ))}
          </ul>
        </ChatInfo>

        <ChatMessages className="chat-messages" ref={messagesRef}>
          {messages.map((message, index) => (
            <div
              key={message.userName + index}
            >
              <UserName>
                {message.userName}:
              </UserName>
              <MassegeText>{message.text} </MassegeText>
            </div>
          ))}
        </ChatMessages>
      </Display>

      <MessageForm onSubmit={e => onSendMessage(e)} id="chat-form">
        <Label autocomplete="off">
          <InputMassege
            autoComplete="off"
            id="msg"
            type="text"
            placeholder="Type a Message"
            required
            value={messageValue}
            onChange={e => setMessageValue(e.target.value)}
          />
          <ButtonSend type="submit">Enter</ButtonSend>
        </Label>
      </MessageForm>
    </ChatContainer>
  );
}
