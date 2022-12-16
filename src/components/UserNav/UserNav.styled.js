import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
display: inline-flex;
align-items: center;
justify-content: center;
background-color: #F59256;
color: white;
height: 35px;
border-radius: 40px;
font-weight: 500;
font-size: 14px;
line-height: 1.36;
letter-spacing: 0.04em;
text-decoration: none;
padding: 8px 36px;
box-sizing: border-box;
margin-bottom: 60px;
@media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
    height: 44px;
    padding: 8px 28px;
    font-size: 16px;
}
@media screen and (min-width: 1280px) {
    margin-right: 0;
}
`

export const UserSvg = styled.svg`
width: 20px;
height: 20px;
margin-right: 12px;
@media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
}
`