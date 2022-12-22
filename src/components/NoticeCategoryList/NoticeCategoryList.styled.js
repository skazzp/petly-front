import styled from 'styled-components';

export const NotFoundBox = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.ml};
  line-height: ${props => props.theme.lineHeights.main};

  ${p => p.theme.breakpoints.tab} {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.5;
  }
`;

export const Wrapper = styled.div`
  /* width: 320px; */
  margin-left: auto;
  margin-right: auto;

  /* @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1248px;
  } */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;

  ${p => p.theme.breakpoints.tab} {
    display: flex;
    gap: 32px;
    width: 704px;
    flex-wrap: wrap;
    /* justify-content: center; */
    flex-direction: row;
  }

  ${p => p.theme.breakpoints.desc} {
    width: 1248px;
  }
`;

export const Img = styled.img`
  width: 280px;
  ${p => p.theme.breakpoints.tab} {
    width: 500px;
  }

  ${p => p.theme.breakpoints.desc} {
    width: 700px;
  }
`;
