import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.44;
`;

export const RadioStyled = styled(Field)`
  position: absolute;
  top: 0;
  opacity: 0;
  appearance: none;
  cursor: pointer;
`;

export const InputStyled = styled(Field)`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 12px 14px;
  color: #111321;
  background-color: ${p => p.theme.colors.background.main};
  border: ${p => p.theme.borders.input};
  border-radius: 40px;
`;

export const InputTextareaStyled = styled(Field)`
  position: relative;
  width: 100%;
  min-height: 50px;
  padding: 12px 14px;
  color: #111321;
  background-color: ${p => p.theme.colors.background.main};
  border: ${p => p.theme.borders.input};
  border-radius: 20px;
  resize: none;

  ${p => p.theme.breakpoints.tab} {
    min-height: 110px;
    padding: 16px 18px;
  }
`;

export const SexInputStyled = styled(Field)`
  position: absolute;
  top: 0;
  opacity: 0;
  appearance: none;
`;

export const Overlay = styled.div`
  background: ${p => p.theme.colors.background.backdrop};
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 280px;
  text-align: center;
  border-radius: 20px;
  padding: 40px 18px;
  margin: 5% auto;
  background-color: ${p => p.theme.colors.white};

  ${p => p.theme.breakpoints.tab} {
    width: 608px;
    padding: 40px 80px;
    border-radius: 40px;
    color: ${p => p.theme.colors.fullBlack};
  }
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;

  ${p => p.theme.breakpoints.tab} {
    font-size: 36px;
    font-weight: 600;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;

  width: 34px;
  height: 34px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  background-color: transparent;
  padding: 7px;

  border-radius: 50%;
  border: none;
  background-color: #fdf7f2;
  backdrop-filter: blur(2px);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translate(-2%, -2%);
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
      -8px -8px 12px rgba(255, 255, 255, 0.3);
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: inherit;
`;

export const Text = styled.p`
  font-weight: 500;
  margin-bottom: 20px;

  ${p => p.theme.breakpoints.tab} {
    margin-bottom: 28px;
    font-size: 20px;
  }
`;

export const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 7px;
  row-gap: 12px;
  margin-bottom: 32px;
`;

export const RadioBtn = styled.div`
  display: block;
  padding: 8px 25px;
  font-size: 14px;
  border-radius: 40px;
  letter-spacing: 0.04em;
  line-height: 1.36;
  border: ${p => p.theme.borders.normal};

  ${p => p.theme.breakpoints.tab} {
    font-size: 20px;
  }

  ${RadioStyled}:checked + &,
  ${RadioStyled}:hover + &,
  ${RadioStyled}:focus + & {
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 1.44;
`;

export const Label = styled.label`
  margin-bottom: 8px;

  ${p => p.theme.breakpoints.tab} {
    margin-bottom: 12px;
    font-size: 24px;
  }
`;

export const SubmitBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;

  ${p => p.theme.breakpoints.tab} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;

  color: #111321;
  background-color: ${p => p.theme.colors.white};
  border-radius: 40px;
  border: ${p => p.theme.borders.normal};
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(odd) {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
      -8px -8px 12px rgba(255, 255, 255, 0.3);
  }

  ${p => p.theme.breakpoints.tab} {
    width: 180px;
    height: 44px;
  }
`;

export const SexWrapper = styled.fieldset`
  display: flex;
  gap: 40px;
  margin-bottom: 32px;
  font-size: 18px;
  border: none;
`;

export const SexTitle = styled.legend`
  margin-bottom: 16px;
  margin-right: auto;

  ${p => p.theme.breakpoints.tab} {
    margin-bottom: 28px;
    font-size: 24px;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

export const SexIcon = styled.span`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 auto 12px;

  ${p => p.theme.breakpoints.tab} {
    width: 54px;
    height: 54px;
  }
`;

export const SexText = styled.span`
  ${p => p.theme.breakpoints.tab} {
    font-size: 20px;
  }

  ${SexInputStyled}:checked ~ &,
  ${SexInputStyled}:hover ~ &,
  ${SexInputStyled}:focus ~ & {
    color: ${p => p.theme.colors.accent};
  }
`;

export const AvatarLabel = styled.label`
  margin-bottom: 8px;

  ${p => p.theme.breakpoints.tab} {
    font-size: 24px;
    margin-bottom: 12px;
  }
  ${p => p.theme.breakpoints.desc} {
    margin-bottom: 18px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 116px;
  margin-bottom: 28px;

  background-color: ${p => p.theme.colors.background.main};
  border: ${p => p.theme.borders.input};
  border-radius: 20px;
  stroke: ${p => p.theme.colors.black};

  ${p => p.theme.breakpoints.tab} {
    width: 140px;
    height: 140px;
  }
  .image-gallery-image {
   
    width: 116px;
  height: 116px;
    object-fit: cover;
    border-radius: 20px;
    ${p => p.theme.breakpoints.tab} {
    width: 140px;
    height: 140px;
  }
    }
    .image-gallery-svg {
    width: 30px;
    height: 30px;
  }

  & .image-gallery-index {
    bottom: 0;
    right: 0;
    z-index: 1;
    top: auto;
    z-index: 0;
  }
`;

export const AvatarImg = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 20px;
  object-fit: cover;
  background-color: ${p => p.theme.colors.background.main};

  ${p => p.theme.breakpoints.tab} {
    width: 140px;
    height: 140px;
  }
`;

export const AvatarIcon = styled.svg`
  width: 48px;
  height: 48px;
  color: rgba(17, 17, 17, 0.6);
`;

export const AvatarInput = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  cursor: pointer;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 10px;
  margin: 0;
  position: absolute;
  bottom: 0;
  right: 0;

  margin-bottom: -30px;
`;
