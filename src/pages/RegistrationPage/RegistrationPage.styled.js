import styled from 'styled-components';
import bgLgX1 from '../../assets/images/bg/login-bg/BG-1x_lg-auth.png';
import bgLgX2 from '../../assets/images/bg/login-bg/BG-2x_lg-auth.png';
import bgMdX1 from '../../assets/images/bg/login-bg/BG-1x_md-auth.png';
import bgMdX2 from '../../assets/images/bg/login-bg/BG-2x_md-auth.png';
import bgSmX1 from '../../assets/images/bg/login-bg/BG-1x_sm-auth.png';
import bgSmX2 from '../../assets/images/bg/login-bg/BG-2x_sm-auth.png';
export const Div = styled.div`
  padding: 0;
  margin: auto;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;

  z-index: -1;

  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 42px;
  padding-bottom: 159px;
  background-image: url(${bgSmX1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgSmX2});
  }

  @media screen and (min-width: 768px) {
    padding-top: 204px;
    padding-bottom: 299px;
    background-image: url(${bgMdX1});
    background-position: top 300px, left 0;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgMdX2});
    }
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 147px;
    margin-left: -20px;
    min-width: 1396px;
    background-position: bottom;
    background-image: url(${bgLgX1});
    background-position: top 300px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgLgX2});
    }
  }
`;
