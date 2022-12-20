import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoNormal = styled.span`
font-size: 28px;
font-weight: 700;
line-height: 1.5;
letter-spacing: 0.07em;
color: ${p => p.theme.colors.fullBlack};
font-family: Poppins;
/* display: block; */
@media screen and (min-width: 768px) {
    font-size: 32px;
  }
@media screen and (min-width: 1280px) {
    margin-right: 80px;
}
`
export const LogoAccent = styled(LogoNormal)`
color: ${p => p.theme.colors.accent};
margin-right: 0;
`

export const LogoLink = styled(NavLink)`
text-decoration: none;
:hover span {

};

`