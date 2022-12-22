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
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding-right: 24px;
`;

export const LabelIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const LabelText = styled.p``;
