import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
     font-family: ${props => props.theme.fonts.main};
     font-weight: ${props => props.theme.fontWeights.normal};
     letter-spacing: ${props => props.theme.letterSpacing.normal};
     line-height: ${p => p.theme.lineHeights.main};
     color: ${props => props.theme.colors.black};
     margin: ${props => props.theme.space[0]}px;
     padding: ${props => props.theme.space[0]}px;
    background-color: ${props => props.theme.colors.background.main};
  }
  ul, li, h1, h2, h3, h4, p, button, img  {
     padding: ${props => props.theme.space[0]}px;
     margin: ${props => props.theme.space[0]}px;
  cursor: default;

  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
