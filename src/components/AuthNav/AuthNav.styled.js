import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthBox =styled.ul`
display: flex;
justify-content: center;

${props => props.theme.breakpoints.onlyMob} {
    width: 100%;
    margin-bottom: 60px;
}
${props => props.theme.breakpoints.tab} {
    justify-content: flex-end;
}
`

export const AuthItem = styled.li`
:not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
}
${p => p.theme.breakpoints.onlyTab} {
:last-child {
    margin-right: ${p => p.theme.space[4]}px;
}}

${p => p.theme.breakpoints.desk} {
:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
}
}
`
export const Link = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
background-color: ${p => p.theme.colors.background.accent};
color: ${p => p.theme.color.white};
height: 35px;
border-radius: ${p => p.theme.space[6]}px;
font-weight: ${p => p.theme.fontWeights.semiBold};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.secondary};
padding: 8px 28px;
${p => p.theme.breakpoints.tab} {
    height: 44px;
    padding: 10px 28px;
    font-size: ${p => p.theme.fontSizes.ml};
}
`
export const LinkInversion = styled(Link)`
background-color: ${p => p.theme.colors.background.white};
border: ${p => p.theme.borders.normal};
color: ${p => p.theme.color.black};
`



