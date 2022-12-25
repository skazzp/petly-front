import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.background.white};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 7px 4px 14px 0px #0000001c;
  ${p => p.theme.breakpoints.tab} {
    width: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-direction: row-reverse;
    padding-right: 40px;
    justify-content: space-between;
  }
  ${p => p.theme.breakpoints.desc} {
    width: 410px;
    /* border-top-left-radius: 0; */
    /* border-bottom-left-radius: 0; */
    flex-direction: column;
    padding-left: 32px;
    justify-content: flex-start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  padding-right: 12px;
  gap: 8px;
  ${p => p.theme.breakpoints.tab} {
    padding-left: 32px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  align-items: center;
  ${p => p.theme.breakpoints.tab} {
    gap: 30px;
  }
`;

export const LabelText = styled.p`
  margin: 0;
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.xs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.secondary};
  ${p => p.theme.breakpoints.tab} {
    font-size: 18px;
  }
`;

export const AvatarBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 233px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 12px;
  box-shadow: 7px 4px 14px 0px #0000001c;
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
  line-height: ${p => p.theme.lineHeights.secondary};
  border: ${p => p.theme.borders.input};
  outline: 0;
  background-color: ${p => p.theme.colors.background.modalInput};
  border-radius: ${p => p.theme.radii.lg};

  &:disabled {
    background-color: ${p => p.theme.colors.background.white};
    border: transparent;
  }
  ${p => p.theme.breakpoints.tab} {
    font-size: 18px;
    width: 210px;
    height: 32px;
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
  ${p => p.theme.breakpoints.tab} {
    width: 32px;
    height: 32px;
  }
`;

export const BtnIcon = styled.svg`
  width: 13px;
  height: 13px;
  ${p => p.theme.breakpoints.tab} {
    width: 20px;
    height: 20px;
  }
`;

export const LogoutBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 42px;
  ${p => p.theme.breakpoints.tab} {
    justify-content: start;
  }
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
  background-color: transparent;
  color: ${p => p.theme.colors.grey};
  cursor: pointer;
  fill: ${p => p.theme.colors.accent};
  stroke: ${p => p.theme.colors.accent};
  &:hover {
    color: ${p => p.theme.colors.black};
    fill: ${p => p.theme.colors.orange};
    stroke: ${p => p.theme.colors.orange};
  }
`;

export const LogoutIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: inherit;
  stroke: inherit;
`;
