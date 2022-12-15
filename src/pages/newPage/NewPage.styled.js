import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background.main};
  width: 320 px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;

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

export const Strip = styled.div`
  display: block;
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;

  ${props => props.theme.breakpoints.tab} {
    width: 280px;
    height: 8px;
  }

  ${props => props.theme.breakpoints.desc} {
    width: 340px;
    height: 8px;
  }
`;

export const Content = styled.div`
  padding-top: 4px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
    width: 1248px;
  }
`;
