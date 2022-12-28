import styled from 'styled-components';
export const ChatContainer = styled.div`
  width: 100%;
`;
export const Display = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const MessageForm = styled.form`
  display: flex;
  width: 100%;
  flex-grow: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const Form = styled.form`
  width: 100%;
  flex-grow: 4;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  /* position: relative; */

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Label = styled.label`
  display: flex;
  position: relative;
  background: none;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  align-items: center;
  justify-content: center;
  border-radius: 40px;

  :focus,
  :hover {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    padding-left: 14px;

    background: #fdf7f2;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const InputMassege = styled.input`
  outline: none;
  background: none;
  border: none;
  box-shadow: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  ::placeholder {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ButtonSend = styled.button`
  cursor: pointer;
  color: #ffffff;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  width: 35%;
  height: 44px;
  border-radius: 20px;
  background: #f59256;
  border: none;
  :active {
    transform: translateY(2px);
  }
  :focus,
  :hover {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.25);
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }
  :active {
    transform: translateY(2px);
  }
  :focus,
  :hover {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.25);
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    min-height: 100%;
  }
`;
