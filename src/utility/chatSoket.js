import io from 'socket.io-client';
const server = 'https://exemple-chat-back.onrender.com';
const socket = io(server);
export default socket;
