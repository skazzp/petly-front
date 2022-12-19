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
  padding-top: 9px;
  padding-right: 10px;
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
  height: 30px;
  color: black;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    height: 287px;
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
