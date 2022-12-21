import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ${p => p.theme.breakpoints.tab} {
    padding-right: 32px;
  }
`;

export const Title = styled.h1`
  text-align: start;
  font-size: ${p => p.theme.fontSizes.ml};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.secondary};
  width: 280px;
  margin-top: 40px;
  margin-bottom: 18px;
  ${p => p.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.xl};
    width: 100%;
    text-align: start;
    padding-left: 32px;
  }
`;
