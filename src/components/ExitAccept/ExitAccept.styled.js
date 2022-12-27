import styled from 'styled-components';

export const Div = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: 100;
`;
export const Wrapper = styled.div`
  border-radius: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[4]}px;
  border: none;
  outline: 1px solid ${p => p.theme.colors.accent};
  box-shadow: ${p => p.theme.colors.accent} -1px 1px 5px 1px;
  background-color: ${p => p.theme.colors.white};
  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 500px;
    height: 200px;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.main};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-top: ${p => p.theme.space[4]}px;
  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[6]}px;
  }
`;
export const Button = styled.button`
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[6]}px;
  border: none;
  outline: 2px solid ${p => p.theme.colors.accent};
  border-radius: 10px;
  background: transparent;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: ${p => p.theme.space[6]}px;
    border-radius: ${p => p.theme.space[6]}px;
    cursor: pointer;
    &:hover {
      transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translate(-5%, -5%);
      box-shadow: 8px 8px 12px rgb(0 0 0 / 25%),
        -8px -8px 12px rgb(255 255 255 / 30%);
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.white};
    }
  }
`;
export const Text = styled.p`
  margin: ${p => p.theme.space[0]}px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.main};
  font-size: ${p => p.theme.fontSizes.m};
`;
