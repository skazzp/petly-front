import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 20px;
  top: 455px;
  z-index: 10;
  cursor: pointer;
  transition: var(--transition);

  ${p => p.theme.breakpoints.tab} {
    position: relative;
    right: 0;
    top: 0;
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
  transition: var(--transition);

  ${p => p.theme.breakpoints.tab} {
    width: 16px;
    height: 16px;
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    transform: scale(1.4);
  }
`;
