import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
height: 100vw;
margin: 30px;`

export const Box =styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin-bottom: 60px;`

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
text-decoration: none;
`
export const InversionNavigationLink = styled(NavigationLink)`
background-color: white;
border: 2px solid #F59256;
color: #111111;
`

export const UserNavLink = styled(NavigationLink)`
width: 164px;
margin-bottom: 60px;
`
export const AuthNavLink = styled(NavigationLink)`
width: 95px;
`
export const AuthInversionNavigationLink = styled(InversionNavigationLink)`
box-sizing: border-box;
width: 144px;
`
export const UserSvg = styled.svg`
width: 20px;
height: 20px;
margin-right: 12px;
`
export const NavTitleBox = styled.ul`
text-align: center;
padding: 0;
list-style: none;
margin: 0;
`

export const NavTitleItem = styled.li`
color: #181C27;
transition: color 300ms linear, text-decoration 300ms linear;
:not(:last-child) {
    margin-bottom: 40px;
}
:hover, :focus {
    color: #F59256;
    text-decoration: underline; 
};

`

export const NavTitle = styled(NavLink)`
color: inherit;
text-decoration: none;
font-weight: 500;
font-size: 32px;
line-height: 1.37;
letter-spacing: 0.04em;
&.active {
    color: #F59256;
    text-decoration: underline;  
}
`