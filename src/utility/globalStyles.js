import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
     font-family: ${props => props.theme.fonts.main};
     color: ${props => props.theme.colors.black};
     margin: ${props => props.theme.space[0]}px;
     padding: ${props => props.theme.space[0]}px;
    background-color: #FDF7F2;
  }
  ul, li, h1, h2, h3, h4, p, button, img  {
     padding: ${props => props.theme.space[0]}px;
     margin: ${props => props.theme.space[0]}px;
  }
`;

export default GlobalStyle;
