import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Title = styled.h1`
  text-align: start;
  font-size: ${p => p.theme.fontSizes.ml};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  width: 280px;
  margin-top: 50px;
  margin-bottom: 18px;
  /* ${p => p.theme.} */
`;
