import styled from 'styled-components';

export const Div = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    padding: 60px 80px 60px 80px;
  }

  @media screen and (min-width: 1280px) {
    z-index: 1;
  }
`;
export const TitlePrimer = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.main};
  text-align: center;
  margin-bottom: 20px;

  ${props => props.theme.breakpoints.tab} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ScrollContainer = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    max-width: 800px;
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    width: 100%;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ButtonScroll = styled.div`
  @media screen and (min-width: 768px) {
    font-size: 30px;
    padding: 40px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 40px;
    text-align: center;
    padding: 0;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const CategoriBox = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 200px;
    height: 180px;
    border-radius: 20px;
  }
`;

export const Title = styled.h3`
  cursor: pointer;
  color: #ffffff;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  /* align-items: center; */
  width: 100%;
  height: 44px;
  border-radius: 20px;
  background: #f59256;
  border: none;

  margin-left: auto;
  margin-right: auto;

  :active {
    transform: translateY(2px);
  }
  :focus,
  :hover {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.25);
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 768px) {
    max-height: 100px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
