import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px 20px;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Box = styled.div`
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Title = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #f59256;
  padding-bottom: 0px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin: 16px;
  }
`;

export const Div = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
    height: 287px;
    padding-left: 4px;
    padding-right: 35px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const List = styled.ul`
  list-style: none;
  font-family: 'Manrope';
  font-style: normal;
  padding: 0;

  color: #000000;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
