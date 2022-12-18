import styled from "styled-components";
import SmileGirlMobMob from '../../assets/images/bg/Bg-girl-mobile-1x.png';
import SmileGirlTab from '../../assets/images/bg/Bg-girl-tablet-1x.png';
import SmileGirlDesk from '../../assets/images/bg/Bg-girl-desc-1x.png';
import Wave from '../../assets/images/bg-home-page-mobile.svg'
import Group1 from '../../assets/images/Group1.svg';
import Group2 from '../../assets/images/Group2.svg';
import Heart from '../../assets/images/Heart.svg'
import Circle from '../../assets/images/Circle.svg'
import Frame from '../../assets/images/Frame26.svg'
export const GlobalContainer = styled.div`
max-width: 1280px;
margin-right: auto;
margin-left: auto;
padding: 16px 20px 0 20px;
height: 100vh;
width: 100vw;
/* z-index: 100;
background-image:  
url(${props => (props.pathName === '/' && `${SmileGirlMobMob}`)});
background-repeat: no-repeat;
background-size: 337px auto;
background-position: bottom; */
/* @media screen and (min-width: 768px) {
padding: 24px 32px 0 32px;
background-image:  
url(${props => (props.pathName === '/' && `${SmileGirlTab}`)}), 
url(${props => (props.pathName === '/' && `${Wave}`)});
background-repeat: no-repeat, no-repeat;
background-size: 699px auto, 1510px auto;
background-position: bottom, bottom -90px right -559px;;
}
@media screen and (min-width: 1280px) {
padding: 16px 20px 0 20px;
background-image:  
url(${props => (props.pathName === '/' && `${SmileGirlDesk}`)}), 
url(${props => (props.pathName === '/' && `${Group1}`)}),
url(${props => (props.pathName === '/' && `${Group2}`)}),
url(${props => (props.pathName === '/' && `${Frame}`)}),
url(${props => (props.pathName === '/' && `${Heart}`)}),
url(${props => (props.pathName === '/' && `${Circle}`)});
background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
background-size: 624px auto, 1091px 826px, 1068px 685px, 550px auto, 92px 89px, 63px 63px;
background-position: bottom right, -50% -730%, 5% 430%, 110% 105%, 58% 25%, 33% 70%;
} */
`
// height: 470px;
// width: 620px;
// left: 534px;
// top: 145px;

export const WaveContainer = styled.div`
z-index: 10;
height: 470px;
width: 620px;
position: absolute;
top: 145px;
left: -86px;

background-image:  
url(${props => (props.pathName === '/' && `${Wave}`)});
background-repeat: no-repeat;
background-size: 620px 470px;
background-position: bottom;
/* @media screen and (min-width: 768px) {
padding: 24px 32px 0 32px;
background-image:  
url(${props => (props.pathName === '/' && `${SmileGirlTab}`)}), 
url(${props => (props.pathName === '/' && `${Wave}`)});
background-repeat: no-repeat, no-repeat;
background-size: 699px auto, 1510px auto;
background-position: bottom, bottom -90px right -559px;;
}
@media screen and (min-width: 1280px) {
padding: 16px 20px 0 20px;
background-image:  
url(${props => (props.pathName === '/' && `${SmileGirlDesk}`)}), 
url(${props => (props.pathName === '/' && `${Group1}`)}),
url(${props => (props.pathName === '/' && `${Group2}`)}),
url(${props => (props.pathName === '/' && `${Frame}`)}),
url(${props => (props.pathName === '/' && `${Heart}`)}),
url(${props => (props.pathName === '/' && `${Circle}`)});
background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
background-size: 624px auto, 1091px 826px, 1068px 685px, 550px auto, 92px 89px, 63px 63px;
background-position: bottom right, -50% -730%, 5% 430%, 110% 105%, 58% 25%, 33% 70%; */
/* } */
`
export const GirlContainer = styled.div`
z-index: 100;
height: 337px;
width: 320px;
position: absolute;
left: 0px;
bottom: 0px;
background-image:  
url(${props => (props.pathName === '/' && `${SmileGirlTab}`)});
background-repeat: no-repeat;
background-size: 320px 337px;
background-position: bottom;
`
