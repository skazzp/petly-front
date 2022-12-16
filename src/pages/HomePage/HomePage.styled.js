import styled from "styled-components";
import SmileGirl from '../../assets/images/bg/Bg-girl-mobile-1x.png'


export const TitleThumb = styled.div`
padding-top: 60px;
padding-bottom: 60px;
margin-left: auto;
margin-right: auto;
max-width: 280px;
@media screen and (min-width: 768px) {
max-width: 588px;
padding-top: 94px;
padding-bottom: 100px;
margin-left: 0;
}
`

export const Title = styled.h1`
color: #000000;
line-height: 1.37;
font-size: 32px;
margin: 0;
@media screen and (min-width: 768px) {
line-height: 1.47;
font-size: 68px;
}
`
export const BcgThumb = styled.div`
/* box-sizing: border-box;
position: absolute;
bottom: 0;
left: 0;
right: 0;
width: 100%;
height: 100vw;
background-image: url(${SmileGirl});
background-repeat: no-repeat;
background-size: contain;
background-position: 1px 1px; */
`