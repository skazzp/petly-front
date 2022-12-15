import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 40px 18px;

  ${p => p.theme.breakpoints.tab} {
    padding: 40px 80px;
  }
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  ${p => p.theme.breakpoints.tab} {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;

  ${p => p.theme.breakpoints.tab} {
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

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  ${p => p.theme.breakpoints.tab} {
    width: 180px;
    height: 44px;
  }
`;

export const SexWrapper = styled.fieldset`
  display: flex;
  margin-bottom: 32px;
  font-size: 18px;
`;

export const SexTitle = styled.legend`
  margin-bottom: 16px;
  margin-right: auto;

  ${p => p.theme.breakpoints.tab} {
    font-size: 24px;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SexIcon = styled.span`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
`;

export const SexText = styled.span`
  ${p => p.theme.breakpoints.tab} {
    font-size: 20px;
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

export const FieldWrapperStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: '16px',
  fontSize: '18px',
  lineHeight: 1.44,
};

export const RadioStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: 0,
  width: '100%',
  height: '100%',
  appearance: 'none',
  cursor: 'pointer',
};

export const InputStyle = {
  position: 'relative',
  width: '100%',
  height: '40px',
  padding: '12px 14px',
  color: '#111321',
  backgroundColor: '#fdf7f2',
  border: '1px solid rgba(245, 146, 86, 0.5)',
  borderRadius: '40px',
};

export const InputTextareaStyle = {
  position: 'relative',
  width: '100%',
  minheight: '50px',
  padding: '12px 14px',
  color: '#111321',
  backgroundColor: '#fdf7f2',
  border: '1px solid rgba(245, 146, 86, 0.5)',
  borderRadius: '20px',
  resize: 'none',
}; // TODO: Add desc styles, Add theme.colors

export const SexInputStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: 0,
  width: '100%',
  height: '100%',
  appearance: 'none',
  cursor: 'pointer',
};
