import styled from 'styled-components';
// не забудьте поставить на батька position relative

export const Validation = styled.p`
  text-align: center;
  position: absolute;
  top: 75%;
  border-radius: 20px;
  border: rgba(245, 146, 86, 0.5) 1px solid;
  background: #fdf7f2;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  padding: 0;
  color: #ff4747;
  width: 74%;
  animation: show 1000ms cubic-bezier(0.43, 0.21, 0, 1.03);
  animation-iteration-count: revert-layer;
  transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03);

  @keyframes show {
    0% {
      transform: translateX(-200px);
    }

    50% {
      transform: translateX();
    }

    100% {
      transform: translateX(0);
    }
  }
  :focus,
  :hover {
    transform: 1000ms cubic-bezier(0.43, 0.21, 0, 1.03);
    /* transition: 1000ms cubic-bezier(0.43, 0.21, 0, 1.03); */
    height: 40%;
    width: 80%;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;
