import styled from 'styled-components';

export const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const LabelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  cursor: pointer;
 
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
 
`;

export const LabelIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.accent};
`;

export const LabelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;
  border-style: none;
  cursor: pointer;
  ${p => p.theme.breakpoints.tab} {
    width: 32px;
    height: 32px;
  }
`;

export const LabelText = styled.p``;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;
