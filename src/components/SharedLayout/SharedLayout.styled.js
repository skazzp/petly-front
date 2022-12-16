import styled from "styled-components";
import SmileGirlMobMob from '../../assets/images/bg/Bg-girl-mobile-1x.png';
import SmileGirlTab from '../../assets/images/bg/Bg-girl-tablet-1x.png';
import Wave from '../../assets/images/bg-home-page-mobile.svg'
export const GlobalContainer = styled.div`
padding: 16px 20px 0 20px;
height: 100vh;
background-image:  url(${props => (props.pathName === '/' && `${SmileGirlMobMob}`)}), url(${props => (props.pathName === '/' && `${Wave}`)});
background-repeat: no-repeat, no-repeat;
background-size: 337px auto, 620px 470px;
background-position: bottom, 32% 100%;
@media screen and (min-width: 768px) {
padding: 24px 32px 0 32px;
background-image:  url(${props => (props.pathName === '/' && `${SmileGirlTab}`)}), url(${props => (props.pathName === '/' && `${Wave}`)});
background-repeat: no-repeat, no-repeat;
background-size: 699px auto, 1449px 1098px;
background-position: bottom, 22% 160%;
}
@media screen and (min-width: 1280px) {
    padding: 16px 20px 0 20px;
}



`
// height: 470px;
// width: 620px;
// left: 534px;
// top: 145px;

