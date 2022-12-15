import styled from 'styled-components';

export const Title = styled.h2`
font-size: ${props => props.theme.fontSizes.l};
line-height: ${props => props.theme.lineHeights.main}; 
text-align: center;
margin-bottom: 28px ;

  ${props => props.theme.breakpoints.tab} {
    font-size: ${props => props.theme.fontSizes.xxl}px;
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;
