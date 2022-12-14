import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  width: 280px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    padding: 60px 80px 60px 80px;
    width: 448px;
  }

  @media screen and (min-width: 1280px) {
    width: 458px;
    z-index: 1;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.04em;
  color: #111111;
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Form = styled.form`
  min-width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Label = styled.label`
  background: none;
  border: 1px solid rgba(245, 146, 86, 0.5);

  border-radius: 40px;
  margin-bottom: 13px;
  padding: 11px 14px;
  :focus,
  :hover {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;

    height: 22px;

    background: #fdf7f2;
    padding: 14px 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  box-shadow: 0;
  width: 100%;
  height: 100%;
  ::placeholder {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 1, 3;
    line-height: 25px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #ffffff;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  width: 100%;
  height: 44px;
  border-radius: 20px;
  background: #f59256;
  border: none;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  :focus,
  :hover {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.25);
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    font-weight: 600;
    font-size: 18px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-top: 24px;
  }
`;
export const Span = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  :focus,
  :hover {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const LinkRegistration = styled(Link)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  :focus,
  :hover {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
