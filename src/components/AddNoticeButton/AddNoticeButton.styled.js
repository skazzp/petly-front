import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  z-index: 9;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  ${p => p.theme.breakpoints.onlyMob} {
    position: fixed;
    bottom: 16px;
    right: 20px;
  }

  ${p => p.theme.breakpoints.tab} {
    position: relative;
    right: 0;
    top: 0;
    z-index: 0;
    height: 44px;
    font-size: 20px;
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
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  ${p => p.theme.breakpoints.tab} {
    width: 44px;
    height: 44px;
    margin-left: 12px;
  }
`;

export const Plus = styled.svg`
  width: 21px;
  height: 21px;
  margin-bottom: 5px;
  fill: ${p => p.theme.colors.white};
  transform: scale(1);
  transition: transform 300ms linear;

  ${p => p.theme.breakpoints.tab} {
    width: 16px;
    height: 16px;
    margin-bottom: 0;
  }

  ${BtnWrapper}:hover &,
  ${BtnWrapper}:focus & {
    transform: scale(1.4);
  }
`;
