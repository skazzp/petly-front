import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background.main};
  /* width: 320 px; */
  padding-bottom: 100px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
    padding-bottom: 200px;
  }
`;
export const WrapperList = styled.div`
  width: 280px;
  margin-right: auto;
  margin-left: auto;

  ${props => props.theme.breakpoints.tab} {
    width: 702px;
  }

  ${props => props.theme.breakpoints.desc} {
    width: 1240px;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.main};
  text-align: center;
  margin-top: 34px;
  margin-bottom: 28px;

  ${props => props.theme.breakpoints.tab} {
    font-size: ${props => props.theme.fontSizes.xxl}px;
    margin-top: 70px;
    margin-bottom: 40px;
  }

  ${props => props.theme.breakpoints.desc} {
    margin-top: 60px;
  margin-bottom: 60px;
  }
`;

export const ListCard = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;

  ${props => props.theme.breakpoints.tab} {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 32px;
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ItemCard = styled.li`
  ${props => props.theme.breakpoints.tab} {
    flex-basis: calc((100%-40px-32px) / 3);
  }

  ${props => props.theme.breakpoints.desc} {
    flex-basis: calc((100%-40px-32px-32px) / 4);
  }
`;
