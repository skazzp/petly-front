import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Logo = styled.span`
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
line-height: ${p => p.theme.lineHeights.logo};
letter-spacing: ${p => p.theme.letterSpacing.logo};
font-family: ${p => p.theme.fontFamily.title};
transition: color 300ms linear;
${p=>p.theme.breakpoints.tab} {
    font-size: ${p=>p.theme.fontSizes.titleSmall};
  }
${p=>p.theme.breakpoints.desc} {
    margin-right: ${p=>p.theme.space[8]}px;
}
`

export const LogoNormal = styled(Logo)`
color: ${p => p.theme.colors.fullBlack};
`
export const LogoAccent = styled(Logo)`
color: ${p => p.theme.colors.accent};
margin-right: ${p=>p.theme.space[0]}px;
`

export const LogoLink = styled(NavLink)`
:hover ${LogoNormal}, 
:focus ${LogoNormal} {
  color: ${p => p.theme.colors.accent};
};
:hover ${LogoAccent},
:focus ${LogoAccent} {
  color: ${p => p.theme.colors.fullBlack};
};

`