import axios from 'axios';
import { useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { ButtonRegister } from 'components/RegistrationForm/RegistrationForm.styled';
import { SelectContainer } from './LoginChat.styled';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Label } from './Chat.styled';
import { selectStyles } from 'components/RegistrationForm/selectStyles';

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
  const customId = 'not-duplicate';
  const onEnter = async e => {
    e.preventDefault();
    if (!roomId) {
      return toast.error('Оберіть тему чату', { toastId: customId });
    }

    await axios.post('https://exemple-chat-back.onrender.com/rooms', obj);
    onLogin(obj);
  };

  const SelectOptions = [
    {
      value: 'sell',
      label: 'sell',
    },
    {
      value: 'lost-found',
      label: 'lost-found',
    },
    {
      value: 'for-free',
      label: 'for-free',
    },
    {
      value: 'good hands',
      label: 'good hands',
    },
    {
      value: 'teem chat',
      label: 'teem chat',
    },
  ];

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
            options={SelectOptions}
            onChange={e => handlerForm(e.value)}
            defaultInputValue={roomId}
          ></Select>
        </SelectContainer>
      </Label>
      <ButtonRegister type="button" className="btn" onClick={onEnter}>
        go to chat
      </ButtonRegister>
    </Form>
  );
}
