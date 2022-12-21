import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoNormal = styled.span`
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
line-height: ${p => p.theme.lineHeights.logo};
letter-spacing: ${p => p.theme.letterSpacing.logo};
color: ${p => p.theme.colors.fullBlack};
font-family: ${p => p.theme.fontFamily.title};

${p=>p.theme.breakpoints.tab} {
    font-size: ${p=>p.theme.fontSizes.titleSmall};
  }
  ${p=>p.theme.breakpoints.desc} {
    margin-right: ${p=>p.theme.space[8]};
}
`
export const LogoAccent = styled(LogoNormal)`
color: ${p => p.theme.colors.accent};
margin-right: ${p=>p.theme.space[0]};
`

export const LogoLink = styled(NavLink)`
:hover span {
};

`