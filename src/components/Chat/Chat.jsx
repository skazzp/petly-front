import { ButtonSend, DivBox, Form, Input, Label, Title } from './Chat.styled';
import { useEffect, useReducer, useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import axios from 'axios';
import socket from 'utility/chatSoket';
import reducer from 'redux/ChatReduser';

const Chat = ({ type }) => {
  const { name } = useSelector(selectUser);
  const [roomId, setRoomId] = useState('');
  // eslint-disable-next-line
  const [formChat, setFormChat] = useState(true);
  console.log(name);
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });


  axios.defaults.baseURL = 'https://exemple-chat-back.onrender.com';

// console.log(setFormChat(state));
 
  const setUsers = users => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    });
  };
  const onLogin = async obj => {
    console.log(obj);
    dispatch({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    console.log(data);
    setUsers(data.users);
  };

  const handlerForm = e => {
    setRoomId(e.target.value);
  };
  const obj = {
    userName: name,
    roomId,
  };
  const onEnter = async e => {
    e.preventDefault();
    if (!roomId || !name) {
      return alert('не вірні данні');
    }
    await axios.post('/rooms', obj).then(onLogin(obj));
  };

  const addMessage = message => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message,
    });
  };
  useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', addMessage);
  }, []);
  return (
    <DivBox type={type}>
      <Title>Chat </Title>
      {formChat ? (
        <Form>
          <div className="form-control">
            <label htmlFor="roomId">Chat Channel</label>
            <select name="roomId" id="roomId" onChange={handlerForm}>
              <option value="sell">sell</option>
              <option value="lost-found">lost-found</option>
              <option value="for-free">for-free</option>
            </select>
          </div>
          <ButtonSend onClick={e => onEnter(e)}>go to chat</ButtonSend>
        </Form>
      ) : (
        <Form>
          <Label>
            <Input></Input>
            {/* {formik.errors.name && formik.touched.name ? (
              <Validation>{formik.errors.name}</Validation>
            ) : null} */}
          </Label>
          <ButtonSend> Send</ButtonSend>
        </Form>
      )}
    </DivBox>
  );
};

export default Chat;
