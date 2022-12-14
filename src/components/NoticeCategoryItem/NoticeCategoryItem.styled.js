import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 280px;
  height: 288px;

  padding-bottom: ${props => props.theme.space[4]}px;
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
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.33;
  align-items: center;
  margin: ${props => props.theme.space[0]}px;

  color: ${props => props.theme.colors.black};
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
`;

export const Wrapper = styled.div`
  width: 231px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${props => props.theme.space[4]}px;
`;

export const Title = styled.h2`
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  padding-bottom: 20px;

  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${props => props.theme.lineHeights.secondary};

  color: ${props => props.theme.colors.black};
`;

export const InfoList = styled.ul`
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  list-style: none;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[1]}px;
`;

export const InfoTitle = styled.p`
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
`;

export const Info = styled.p`
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  width: 60%;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[2]}px;
`;

export const BtnLearnMore = styled.button`
  width: 248px;
  height: 38px;

  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  color: ${props => props.theme.colors.accent};

  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: ${props => props.theme.space[6]}px;

  :hover {
    border: 2px solid #ff6101;
    color: ${props => props.theme.colors.orange};
  }
`;

export const BtnDlt = styled.button`
  width: 248px;
  height: 38px;

  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  color: ${props => props.theme.colors.accent};

  background: ${props => props.theme.colors.white};
  border: 2px solid #f59256;
  border-radius: ${props => props.theme.space[6]}px;

  :hover {
    border: 2px solid #ff6101;
    color: ${props => props.theme.colors.orange};
  }
`;
