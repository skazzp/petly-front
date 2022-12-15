import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavTitleBox = styled.ul`
text-align: center;
padding: 0;
list-style: none;
margin: 0;
@media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }`

export const NavTitleItem = styled.li`
:not(:last-child) {
    @media screen and (max-width: 767px) {
        margin-bottom: 40px;
    }
    @media screen and (min-width: 768px) {
        margin-bottom: 60px;
    }
    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
        margin-right: 80px;
    }
}
`

export const NavTitle = styled(NavLink)`
color: #181C27;
text-decoration: none;
font-weight: 500;
font-size: 32px;
line-height: 1.37;
letter-spacing: 0.04em;
transition: color 300ms linear;
@media screen and (min-width: 768px) {
font-size:  48px;

}
@media screen and (min-width: 1280px) {
font-size:  20px;
  }
:hover, :focus {
    color: #F59256;
};
&.active {
    color: #F59256;
    text-decoration-line: underline;
    text-decoration-thickness: 0.03em; 
}
`