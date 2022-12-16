import styled from "styled-components";
import SmileGirl from '../../assets/images/bg/Bg-girl-mobile-1x.png';
import Wave from '../../assets/images/bg-home-page-mobile.svg'
export const GlobalContainer = styled.div`
padding: 16px 20px 0 20px;
height: 100vh;
@media screen and (min-width: 768px) {
    padding: 24px 32px 0 32px;
}
@media screen and (min-width: 1280px) {
    padding: 16px 20px 0 20px;
}
background-image:  url(${props => (props.pathName === '/' && `${SmileGirl}`)}), url(${props => (props.pathName === '/' && `${Wave}`)});
background-repeat: no-repeat, no-repeat;
background-size: 337px auto, 620px 470px;
background-position: bottom, 32% 100%;
`
