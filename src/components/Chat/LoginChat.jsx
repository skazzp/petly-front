import axios from 'axios';
import { useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function LoginChat({ onLogin }) {
  const { name } = useSelector(selectUser);

  const [roomId, setRoomId] = useState('');

  //   axios.defaults.baseURL = 'https://exemple-chat-back.onrender.com';
  const obj = {
    roomId,
    userName: name,
  };
  const handlerForm = e => {
    setRoomId(e.target.value);
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
  return (
    <>
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
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
