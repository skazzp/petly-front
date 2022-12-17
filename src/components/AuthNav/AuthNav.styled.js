import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {InversionNavigationLink, NavigationLink} from '../Navigation/Navigation.styled'

export const AuthBox =styled.ul`
display: flex;
justify-content: center;
list-style: none;
margin: 0;
margin-bottom: 60px;
padding-left: 0;
@media screen and (max-width: 767px) {
    width: 100%;
}
@media screen and (min-width: 768px) {
    margin-bottom: 0;
    justify-content: flex-end;
}
`

export const AuthItem = styled.li`
:not(:last-child) {
    margin-right: 12px;
}
@media screen and (min-width: 768px) {
:last-child {
    margin-right: 20px;
}}

@media screen and (min-width: 1280px) {
:not(:last-child) {
    margin-right: 20px;
}
    :last-child {
    margin-right: 0;
}
}
`
export const Link = styled(NavLink)`
display: flex;
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
padding: 8px 28px;
box-sizing: border-box;
@media screen and (min-width: 768px) {
    height: 44px;
    padding: 10px 28px;
    font-size: 20px;
}
`
export const LinkInversion = styled(Link)`
background-color: white;
border: 2px solid #F59256;
color: #111111;
`



