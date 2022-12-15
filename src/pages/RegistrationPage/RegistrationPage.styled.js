import styled from 'styled-components';

export const Div = styled.div`
  padding-top: 80px;
  padding-bottom: auto;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #fdf7f2;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }

  svg {
    use {
      height: 1000px;
      width: 1500px;
    }
  }
`;
