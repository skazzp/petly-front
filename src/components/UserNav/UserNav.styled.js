import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
display: inline-flex;
align-items: center;
justify-content: center;
background-color: ${p=>p.theme.colors.background.accent};
color: ${p=>p.theme.colors.white};
height: 35px;
border-radius: ${p=>p.theme.radii.lg};
font-weight: ${p=>p.theme.fontWeights.semiBold};
font-size: ${p=>p.theme.fontSizes.s};
padding: 8px 36px;
margin-bottom: 60px;

${p=>p.theme.breakpoint.tab} {
    margin-bottom: ${p=>p.theme.space[0]};
    margin-right: ${p=>p.theme.space[4]};
    height: 44px;
    padding: 8px 28px;
    font-size: ${p=>p.theme.fontSizes.m};
}
${p=>p.theme.breakpoint.desc} {
    margin-right: ${p=>p.theme.space[0]};
}
`

export const UserSvg = styled.svg`
width: ${p=>p.theme.space[4]};
height: ${p=>p.theme.space[4]};
margin-right: ${p=>p.theme.space[2]};
${p=>p.theme.breakpoint.tab} {
    width: 28px;
    height: 28px;
}
`