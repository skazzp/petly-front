import styled from 'styled-components';

export const GlobalBox = styled.div`
  padding: 42px 16px 0 16px;
  ${p => p.theme.breakpoints.tab} {
    padding: 92px 16px 0 16px;
  }

  ${p => p.theme.breakpoints.desc} {
    padding: 60px 20px 0 20px;
  }
`;

export const Wrapper = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${p => p.theme.breakpoints.tab} {
    width: 704px;
    gap: 60px;
  }

  ${p => p.theme.breakpoints.desc} {
    width: 1248px;
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
