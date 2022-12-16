import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background.main};
  width: 320 px;
  padding-bottom: 100px; */

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.main};
  text-align: center;
  margin-top: 14px;
  margin-bottom: 36px;

  ${props => props.theme.breakpoints.tab} {
    font-size: ${props => props.theme.fontSizes.xxl}px;
    margin-top: 70px;
    margin-bottom: 40px;
  }

  ${props => props.theme.breakpoints.desc} {
    margin-top: 40px;
  }
`;

