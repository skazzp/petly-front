import io from 'socket.io-client';
const socket = io('https://exemple-chat-back.onrender.com', {
  withCredentials: true,
  extraHeaders: {
    abcd: 'abcd',
  },
});
export default socket;
