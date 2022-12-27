import styled from 'styled-components';

export const MessageForm = styled.form`
  max-height: 60%;
`;
export const ChatContainer = styled.div`
  max-width: 1100px;
  background: #fff;
  margin: 30px auto;
  overflow: hidden;
  & .chat-header {
    background: #000000;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .chat-header {
    background: #000000;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* & .chat-main {
    display: grid;
    grid-template-columns: 1fr 3fr;
  } */
  & .chat-sidebar {
    background: #272728;
    color: #fff;
    padding: 20px 20px 60px;
    overflow-y: scroll;
  }
  & .chat-sidebar h2 {
    font-size: 20px;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 20px;
  }
  & .chat-sidebar h3 {
    margin-bottom: 15px;
  }
  & .chat-sidebar ul li {
    padding: 10px 0;
    border-top: 0.7px solid;
    border-bottom: 0.7px solid;
  }
  & .chat-sidebar::-webkit-scrollbar {
    width: 1em;
  }
  & .chat-sidebar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  & .chat-sidebar::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  & .chat-messages {
    padding: 30px;
    max-height: 500px;
    overflow-y: scroll;
    background-image: url('../img/chat-bg.jpg');
    background-position: center;
    background-size: contain;
  }

  & .chat-messages .message {
    padding: 10px;
    margin-bottom: 15px;
    background-color: #e0e3f4;
    border-radius: 5px;
  }

  & .chat-messages .message .meta {
    font-size: 15px;
    font-weight: bold;
    color: #272728;
    opacity: 0.7;
    margin-bottom: 7px;
    display: flex;
  }

  & .chat-messages .message .meta span {
    color: #777;
    margin-left: auto;
  }

  & .chat-form-container {
    padding: 20px 30px;
    background-color: #000000;
  }

  & .chat-form-container form {
    display: flex;
  }

  & .chat-form-container input[type='text'] {
    border-radius: 15px;
    border: none;
    font-size: 16px;
    padding: 10px;
    height: 40px;
    flex: 1;
    outline: none;
  }

  & button.btn-plane {
    width: 50px;
    height: 30px;
    border-radius: 50px;
    border: none;
    background: red;
    cursor: pointer;
  }

  & i.fas.fa-paper-plane {
    font-size: 1.5rem;
    color: white;
    outline: none;
  }
`;
