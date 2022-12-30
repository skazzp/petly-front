import styled from 'styled-components';

export const DivBox = styled.div`
  display: flex;
  overflow: scroll;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 500px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    position: fixed;
    /* top: 0; */
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 20;
    margin-left: auto;
    align-items: center;
    height: 100vh;
    width: 40%;
    /* min-width: 450px; */
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px 0 0 40px;
    /* padding: 90px 16px 60px 80px; */
    padding: 20px 16px 18px 16px;
    border-left: 20px solid rgba(245, 146, 86, 0.5);
  }

  @media screen and (min-width: 1280px) {
    /* min-height: 100vh;
    width: 30%; */
    max-height: 60vh;
    width: 20%;
    z-index: 49;
  }

  animation: show 1000ms cubic-bezier(0.43, 0.21, 0, 1.03);
  /* animation-iteration-count: revert-layer; */
  /* transition: 1000ms cubic-bezier(0.43, 0.21, 0, 1.03); */

  @keyframes show {
    0% {
      transform: translateX(300px);
    }

    50% {
      transform: translateX();
    }

    100% {
      transform: translateX(0);
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    /* font-size: 36px;
    line-height: 49px;
    margin-bottom: 20px; */
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 4;
  justify-content: center;

  word-break: break-all;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: space-between;
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

  margin-bottom: 13px;
  padding: 0 14px;
  :focus,
  :hover {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }

  @media screen and (min-width: 768px) {
    height: 52px;

    background: #fdf7f2;
    padding: 14px 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
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
  /* overflow: hidden; */
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

  width: 100%;
  height: 44px;
  border-radius: 20px;
  background: #f59256;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;
  margin-bottom: 40px;
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
    height: 48px;
  }
`;
