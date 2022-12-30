import styled from 'styled-components';

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Img = styled.img`
  max-height: 400px;
  width: auto;

  -webkit-animation-name: spinner;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 2s;
  animation-name: spinner;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  @keyframes spinner {
    0% {
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }

    100% {
      -moz-transform: rotateX(-380deg);
      -ms-transform: rotateY(-380deg);
      transform: rotateX(-380deg);
    }
  }
`;
