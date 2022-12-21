import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${p => p.theme.breakpoints.tab} {
    width: 704px;
    margin-top: 92px;
    gap: 60px;
  }

  ${p => p.theme.breakpoints.desc} {
    width: 1248px;
    margin-top: 60px;
    gap: 60px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  ${p => p.theme.breakpoints.tab} {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.main};

  text-align: center;

  ${p => p.theme.breakpoints.tab} {
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 1.5;
  }
`;
