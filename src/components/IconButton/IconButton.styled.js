import styled from 'styled-components';
export const Button = styled.button`
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.background.main};
  color: ${props => (props.color ? props.color : props.theme.colors.black)};
  padding: 0;

  ${p => p.theme.breakpoints.onlyMob} {
  }

  ${p => p.theme.breakpoints.tab} {
    height: 44px;
    padding: 8px 28px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Svg = styled.svg`
  width: ${p => p.size};
  height: ${p => p.size};
  fill: currentColor;
  margin-right: ${p => p.theme.space[2]}px;
  ${p => p.theme.breakpoints.tab} {
    width: 28px;
    height: 28px;
  }
`;
