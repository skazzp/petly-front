import axios from 'axios';
import { useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { SelectContainer } from './LoginChat.styled';
import Select from 'react-select';
import { selectStyles } from 'components/RegistrationForm/selectStyles';
import { Form, Label } from './Chat.styled';
import { ButtonExit } from 'components/ModalAddsPet/ModalAddsPet.styled';
import { ButtonRegister } from 'components/RegistrationForm/RegistrationForm.styled';
export default function LoginChat({ onLogin }) {
  const { name } = useSelector(selectUser);

  const [roomId, setRoomId] = useState('');

  //   axios.defaults.baseURL = 'https://exemple-chat-back.onrender.com';
  const obj = {
    roomId,
    userName: name,
  };
  const handlerForm = room => {
    setRoomId(room);
  };

  const onEnter = async e => {
    e.preventDefault();
    if (!roomId) {
      return alert('оберіть тему чату');
    }

    await axios
      .post('https://exemple-chat-back.onrender.com/rooms', obj)
      .then(onLogin(obj));
  };

  const Selectoptions = [{
    value: "sell",
    label: "sell"
  },{
    value: "lost-found",
    label: "lost-found"
  },{
    value: "for-free",
    label: "for-free",
  },{
    value: "good hands",
    label: "good hands",
  },{
    value: "teem chat",
    label: "teem chat",
  }];

  return (
          <Form>
      {/* <label htmlFor="roomId">Chat Channel</label> */}
      <Label>
      <SelectContainer>
              <Select
                placeholder="Chat Channel"
                defaultValue={roomId}
                id="city"
                name="city"
                styles={selectStyles()}
                options={Selectoptions}
                onChange={e => handlerForm(e.value)}
                defaultInputValue={roomId}
              ></Select>
      </SelectContainer>
      </Label>
              {/* <select name="roomId" id="roomId" onChange={handlerForm}>
                <option value="sell">sell</option>
                <option value="lost-found">lost-found</option>
                <option value="for-free">for-free</option>
              </select> */}
              <ButtonRegister type="button" className="btn" onClick={onEnter}>
      <div className="join-container">
        <main className="join-main">
          <form>
            <div className="form-control"></div>
            <div className="form-control">
              <label htmlFor="roomId">Chat Channel</label>
              <select name="roomId" id="roomId" onChange={handlerForm}>
                <option value="sell">sell</option>
                <option value="lost-found">lost-found</option>
                <option value="for-free">for-free</option>
              </select>
            </div>
            <div className="flex">
              <button type="button" className="btn" onClick={onEnter}>
                Login to Chat
              </ButtonRegister>
          </Form>
  );
}
