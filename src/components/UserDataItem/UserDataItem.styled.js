import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 280px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.background.white};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.md};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  align-items: center;
  padding-left: 16px;
  padding-right: 12px;
  gap: 8px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  align-items: center;
`;

export const LabelText = styled.p`
  margin: 0;
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.xs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const AvatarBox = styled.div`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 36px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 160px;
  height: 24px;
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  border: ${p => p.theme.borders.input};
  outline: 0;
  background-color: ${p => p.theme.colors.background.modalInput};
  border-radius: ${p => p.theme.radii.lg};

  &:disabled {
    background-color: ${p => p.theme.colors.background.white};
    border: transparent;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;
  border-style: none;
  cursor: pointer;
`;

export const BtnIcon = styled.svg`
  width: 13px;
  height: 13px;
`;

export const LogoutBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 42px;
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  border: 0;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.grey};
  background-color: transparent;
  /* padding: 0; */
`;

export const LogoutIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${p => p.theme.colors.accent};
`;
