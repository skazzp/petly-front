import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 68px;
  left: 0;
  background-color: ${p => p.theme.colors.background.main};
  text-align: center;
`;
