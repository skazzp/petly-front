import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import bgLgX1 from '../../assets/images/bg/login-bg/BG-1x_lg-auth.png';
// import bgLgX2 from '../../assets/images/bg/login-bg/BG-2x_lg-auth.png';
// import bgMdX1 from '../../assets/images/bg/login-bg/BG-1x_md-auth.png';
// import bgMdX2 from '../../assets/images/bg/login-bg/BG-2x_md-auth.png';
// import bgSmX1 from '../../assets/images/bg/login-bg/BG-1x_sm-auth.png';
// import bgSmX2 from '../../assets/images/bg/login-bg/BG-2x_sm-auth.png';
import BgSvgLg from '../../assets/images/bg/login-bg/BG-lg-auth_svg.svg';
import BgSvgMd from '../../assets/images/bg/login-bg/BG-md-auth_svg.svg';
import BgSvgsm from '../../assets/images/bg/login-bg/BG-sm-auth_svg.svg';
export const Div = styled.div`
  padding-bottom: auto;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 42px;

  @media screen and (min-width: 768px) {
    padding-top: 241px;
    padding-bottom: 266px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 113px;
  }
`;

export const GlobalStyleRegistration = createGlobalStyle`
body{
  /* width: 1780px; */
  /* height: 100%; */
  background-repeat: no-repeat;
  background-position: center 359px ;
  background-image: url(${BgSvgsm});



  @media screen and (min-width: 768px) {
     
    background-image: url(${BgSvgMd});
    background-position: center bottom -136px ;
    /* background-position-x:  ; */
    
  }

  @media screen and (min-width: 1280px) {
  background-position: center 368px;
  /* background-size: cover; */
    background-image: url(${BgSvgLg});
   
  }}

`;
