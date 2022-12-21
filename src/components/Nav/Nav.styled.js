import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavTitleBox = styled.ul`
text-align: center;
${props => props.theme.breakpoints.desc} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }`

export const NavTitleItem = styled.li`
:not(:last-child) {
    margin-bottom: ${p=>p.theme.space[6]}px;

    ${props => props.theme.breakpoints.tab} {
        margin-bottom: 60px;
    }
    ${props => props.theme.breakpoints.desc} {
        margin-bottom: ${p=>p.theme.space[0]}px;
        margin-right: ${p=>p.theme.space[8]}px;
    }
}
`

export const NavTitle = styled(NavLink)`
color: ${p=>p.theme.colors.blackLink};
font-weight: ${p=>p.theme.fontWeights.semiBold};
font-size: ${p=>p.theme.fontSizes.titleSmall};
transition: color 300ms linear;
${props => props.theme.breakpoints.tab} {
font-size: ${p=>p.theme.fontSizes.xxl};
}
${props => props.theme.breakpoints.desc} {
font-size:  ${p=>p.theme.space[4]}px;
  }
:hover, :focus {
    color: ${props => props.theme.colors.accent};
};
&.active {
    color: ${props => props.theme.colors.accent};
    text-decoration-line: underline;
    text-decoration-thickness: 0.03em; 
}
`