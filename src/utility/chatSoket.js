import io from 'socket.io-client';
const socket = io('https://exemple-chat-back.onrender.com', {
  withCredentials: true,
});
export default socket;
