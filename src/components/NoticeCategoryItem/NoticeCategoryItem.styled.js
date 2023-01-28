import styled from 'styled-components';
// import ReactImageGallery from 'react-image-gallery';

export const Item = styled.li`
  position: relative;
  padding-bottom: 12px;
  width: 280px;
  min-height: 606px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  justify-content: space-between;

  background: ${props => props.theme.colors.white};

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;

  ${p => p.theme.breakpoints.tab} {
    width: 336px;
    margin-bottom: auto;
  }

  ${p => p.theme.breakpoints.desc} {
    width: 288px;
  }

  & .image-gallery-image {
    width: 280px;
    height: 288px;
    bottom: 0;
    object-fit: fill !important;
    @media screen and (min-width: 768px) {
      width: 336px;
      height: 288px;
      object-fit: fill;
    }

    @media screen and (min-width: 1280px) {
      width: 288px;
      height: 288px;
    }
  }

  & .image-gallery-svg {
    width: 30px !important;
    height: 60px !important;
  }

  & .image-gallery-index {
    bottom: 0;
    right: 0;
    z-index: 1;
    top: auto;
    z-index: 0;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 288px;
  padding-bottom: ${props => props.theme.space[4]}px;

  ${p => p.theme.breakpoints.tab} {
    width: 336px;
    height: 288px;
  }

  ${p => p.theme.breakpoints.desc} {
    width: 288px;
    height: 288px;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  width: 158px;
  height: 28px;

  display: flex;
  justify-content: center;
  border-radius: 0 40px 40px 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.33;
  align-items: center;
`;

export const BtnAddFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: ${props => props.theme.space[7]}px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-2%, -2%);
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
      -8px -8px 12px rgba(255, 255, 255, 0.3);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: 200px;
  padding: 20px 20px ${props => props.theme.space[4]}px 29px;
  margin-left: auto;
  margin-right: auto;

  ${p => p.theme.breakpoints.tab} {
    margin-left: ${props => props.theme.space[0]}px;
    margin-right: ${props => props.theme.space[0]}px;
    padding-left: ${props => props.theme.space[4]}px;
  }
`;

export const Wrap = styled.div`
  min-height: 308px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  min-width: 231px;

  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${props => props.theme.lineHeights.secondary};
`;

export const InfoList = styled.ul`
  list-style: none;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[1]}px;
`;

export const InfoTitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  cursor: default;
`;

export const Info = styled.p`
  width: 60%;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
`;

export const BtnBox = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.space[2]}px;
`;

export const BtnLearnMore = styled.button`
  width: 248px;
  height: 38px;

  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  color: ${props => props.theme.colors.accent};

  background: ${props => props.theme.colors.white};
  border: 2px solid #f59256;
  border-radius: ${props => props.theme.space[6]}px;

  cursor: pointer;

  :hover,
  :focus {
    border: 2px solid #ff6101;
    color: ${props => props.theme.colors.orange};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-2%, -2%);
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
      -8px -8px 12px rgba(255, 255, 255, 0.3);
  }
`;

export const BtnDlt = styled.button`
  width: 248px;
  height: 38px;

  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  color: ${props => props.theme.colors.accent};

  background: ${props => props.theme.colors.white};
  border: 2px solid #f59256;
  border-radius: ${props => props.theme.space[6]}px;

  fill: ${props => props.theme.colors.accent};

  cursor: pointer;

  :hover,
  :focus {
    border: 2px solid #ff6101;
    color: ${props => props.theme.colors.orange};
    fill: ${props => props.theme.colors.orange};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-2%, -2%);
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25),
      -8px -8px 12px rgba(255, 255, 255, 0.3);
  }
`;

export const Span = styled.span`
  padding-right: 15px;
`;

export const Svg = styled.svg`
  fill: inherit;
`;
