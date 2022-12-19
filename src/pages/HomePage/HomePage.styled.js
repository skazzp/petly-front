import styled from "styled-components";


export const TitleThumb = styled.div`
padding-top: 60px;
padding-bottom: 60px;
max-width: 280px;
position: relative;
@media screen and (min-width: 768px) {
max-width: 588px;
padding-top: 94px;
padding-bottom: 100px;
margin-left: 0;
}
@media screen and (min-width: 1280px) {
padding-top: 92px;
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