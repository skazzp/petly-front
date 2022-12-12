import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
     font-family: ${props => props.theme.fonts.main};
     color: ${props => props.theme.colors.black};
     margin: ${props => props.theme.space[0]}px;
     padding: ${props => props.theme.space[0]}px;
 
  }
`;

export default GlobalStyle;
