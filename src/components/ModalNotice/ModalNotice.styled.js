import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${p => p.theme.colors.background.backdrop};
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: flex-start;
`;
export const Div = styled.div`
  background-color: ${p => p.theme.colors.background.white};
  z-index: ${p => p.theme.space[3]};
  max-width: 280px;
  padding: 60px 20px 40px;
  border-radius: ${p => p.theme.space[4]}px;
  position: relative;
  top: 5%;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    max-height: 550px;
    padding: 32px 40px 32px 20px;
    top: 10%;
    border-radius: ${p => p.theme.space[6]}px;
  }
`;
export const WrapperForDesc = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
`;
export const Img = styled.img`
  width: 240px;
  @media screen and (min-width: 768px) {
    width: 290px;
    height: 330px;
  }
`;
export const Status = styled.div`
  width: 160px;
  height: 28px;
  position: absolute;
  background: ${p => p.theme.colors.background.popup};
  backdrop-filter: blur(50px);
  border-radius: 0px 16px 16px 0px;
  top: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StatusText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.main};
  margin: 0;
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.main};
  letter-spacing: -0.01em;
  width: 195px;
  margin: ${p => p.theme.space[0]}px;
  padding-top: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
    width: 268px;
    padding-top: 0;
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  gap: 55px;
  padding-top: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[4]}px;
  }
`;
export const FirstList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  &:last-child {
    padding-bottom: 0px;
  }
`;
export const SecondList = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
`;
export const Items = styled.li`
  padding-bottom: ${p => p.theme.space[1]}px;
  &:last-child {
    padding-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Text = styled.p`
  margin: ${p => p.theme.space[0]}px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.main};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const TextSecond = styled.p`
  margin: ${p => p.theme.space[0]}px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.main};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
export const Span = styled.span`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.s};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
export const P = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.main};
  margin: ${p => p.theme.space[0]}px;
  padding-top: 28px;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
  }
`;
export const ListButtons = styled.ul`
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: 40px 0 0 0;
  display: flex;
  align-content: stretch;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding-top: ${p => p.theme.space[5]}px;
  }
`;
export const ItemContact = styled.li`
  width: 240px;
  height: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: ${p => p.theme.space[6]}px;
    &:hover {
      transition-delay: 150ms, 2s;
      transform: translate(-5%, -5%);
      box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
        -8px -8px 12px rgba(255, 255, 255, 0.3);
    }
  }
`;
export const Link = styled.a`
  text-decoration: none;
`;
export const Btn = styled.button`
  width: 240px;
  height: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.space[6]}px;
  border: 2px solid ${p => p.theme.colors.accent};
  background: inherit;

  @media screen and (min-width: 768px) {
    width: 160px;
    height: ${p => p.theme.space[6]}px;
    cursor: pointer;
    &:hover {
      transition-delay: 150ms, 2s;
      transform: translate(-5%, -5%);
      box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
        -8px -8px 12px rgba(255, 255, 255, 0.3);
    }
  }
`;
export const TxtWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactText = styled.p`
  margin: 0;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.main};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.white};
`;
export const TextBtn = styled.p`
  margin: 0;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.main};
  font-size: ${p => p.theme.fontSizes.m};
  padding-right: 10px;
`;

export const SvgHeart = styled.svg`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;
export const CloseBtn = styled.button`
  /* background: transparent;
  border: none; */
  padding: 8px 8px 4px 8px;

  border-radius: ${p => p.theme.radii.round};

  background: ${p => p.theme.colors.background.main};
  backdrop-filter: blur(2px);
  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
  border: none;

  @media screen and (min-width: 768px) {
    &:hover {
      transition-delay: 150ms, 2s;
      transform: translate(-2%, -2%);
      box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
        -8px -8px 12px rgba(255, 255, 255, 0.3);
    }
  }
`;
export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  /* padding: 10px;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};

  background: ${p => p.theme.colors.background.main};
  backdrop-filter: blur(2px);
  position: absolute;
  right: 30px;
  top: 15px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    &:hover {
      transition-delay: 150ms, 2s;
      transform: translate(-2%, -2%);
      box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
        -8px -8px 12px rgba(255, 255, 255, 0.3);
    }
  } */
`;
