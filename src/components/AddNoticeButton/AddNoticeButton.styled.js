import styled from 'styled-components';
// import { ReactComponent as PlusSvg } from '../../';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 20px;
  top: 440px;
  z-index: 10;
  cursor: pointer;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    position: relative;
    right: 0;
    top: 0;
  }

  &:hover,
  &:focus {
    color: red;
  }
`;

export const AddBtn = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  background-color: gray;
  color: white;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    margin-left: 12px;
  }
`;

export const Plus = styled.div`
  width: 21px;
  height: 21px;
  margin-bottom: 5px;
  transform: scale(1);
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    transform: scale(1.4);
  }
`;
