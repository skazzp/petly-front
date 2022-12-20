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

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.main};
  text-align: center;
  margin-top: 34px;
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

export const ListCard = styled.ul`
  list-style: none;
  padding: 0px;
  margin:0px ;

  ${props => props.theme.breakpoints.tab} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px ;
    row-gap: 60px;
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
    flex-basis: calc((100%-40px-32px-32px)/4);
  }
`;

