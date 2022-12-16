import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: block; */
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  /*; */

  ${props => props.theme.breakpoints.tab} {
    width: 335px;

    /* &:nth-first(2n+1) {
      margin-left: auto;
    } */
    /* &:nth-child(2n){
      margin-right: auto;
    } */
  }

  ${props => props.theme.breakpoints.desc} {
    width: 392px;
  }
`;

export const Strip = styled.div`
  display: block;
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 40px;

  ${props => props.theme.breakpoints.tab} {
    width: 280px;
    height: 8px;
    margin-top: 0px;
  }

  ${props => props.theme.breakpoints.desc} {
    width: 340px;
    height: 8px;
  }
`;

export const Title = styled.h3`
  margin-top: 4px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.main};
  letter-spacing: -0.01em;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Content = styled.div`
  margin-top: ${props => props.theme.space[3]}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.secondary};

  color: ${props => props.theme.colors.background.content};

  ${props => props.theme.breakpoints.tab} {
    margin-top: ${props => props.theme.space[0]}px;
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.space[4]}px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Data = styled.div`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props => props.theme.colors.background.backdrop};
  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Link = styled.a`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  text-align: right;
  text-decoration-line: underline;
  color: ${props => props.theme.colors.accent};
  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
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
    /* padding-bottom: 60px; */

    row-gap: 60px;
    column-gap: 32px;
    /* margin-top: 20px; */
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
