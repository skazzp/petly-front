import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  gap: 12px;
  display: flex;
  ${p => p.theme.breakpoints.onlyTab} {
    margin-right: ${p => p.theme.space[4]}px;
  }
  ${p => p.theme.breakpoints.onlyMob} {
    justify-content: center;
  }
`;
export const Link = styled(NavLink)`
  z-index: 50;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.background.accent};
  color: ${p => p.theme.colors.white};
  height: 35px;
  border-radius: ${p => p.theme.radii.lg};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  padding: 8px 36px;
  ${p => p.theme.breakpoints.onlyMob} {
    margin-bottom: 60px;
  }

  ${p => p.theme.breakpoints.tab} {
    height: 44px;
    padding: 8px 28px;
    font-size: ${p => p.theme.fontSizes.m};
  }
  :hover,
  :focus {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-1%, -1%);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25),
      -4px -4px 6px rgba(255, 255, 255, 0.3);
  }
`;

export const ChatButton = styled.button`
  z-index: 50;
  cursor: pointer;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.background.accent};
  color: ${p => p.theme.colors.white};
  height: 35px;
  border-radius: ${p => p.theme.radii.lg};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  padding: 8px 36px;
  ${p => p.theme.breakpoints.onlyMob} {
    margin-bottom: 60px;
  }

  ${p => p.theme.breakpoints.tab} {
    height: 44px;
    padding: 8px 28px;
    font-size: ${p => p.theme.fontSizes.m};
  }
  :hover,
  :focus {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-1%, -1%);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25),
      -4px -4px 6px rgba(255, 255, 255, 0.3);
  }
`;

export const UserSvg = styled.svg`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[2]}px;
  ${p => p.theme.breakpoints.tab} {
    width: 28px;
    height: 28px;
  }
`;
