import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
background-color: #F59256;
color: white;
width: 164px;
height: 35px;
border-radius: 40px;
font-weight: 500;
font-size: 14px;
line-height: 1.36;
letter-spacing: 0.04em;
`
export const ReverseNavigationLink = styled(NavigationLink)`
background-color: white;
border: 2px solid #F59256;
color: #111111;
`

export const UserNavLink = styled(NavigationLink)`
width: 164px;`