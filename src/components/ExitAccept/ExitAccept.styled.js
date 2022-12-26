import styled from 'styled-components';

export const Div = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  align-items: center;
  backdrop-filter: blur(2px);
`;
export const Wrapper = styled.div`
  border-radius: 40px;
  padding: 20px;
  border: none;
  outline: 1px solid #f59256;
  box-shadow: #f59256 -1px 1px 5px 1px;
  background-color: white;
  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 500px;
    height: 200px;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.38;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;
export const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  outline: 2px solid #f59256;
  border-radius: 10px;
  background: transparent;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 40px;
    border-radius: 40px;
    cursor: pointer;
    &:hover {
      transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translate(-5%, -5%);
      box-shadow: 8px 8px 12px rgb(0 0 0 / 25%),
        -8px -8px 12px rgb(255 255 255 / 30%);
      background-color: #f59256;
      color: white;
    }
  }
`;
export const Text = styled.p`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  line-height: 1.38;
  font-size: 16px;
`;
