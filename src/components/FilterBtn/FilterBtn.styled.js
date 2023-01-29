import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  ${p => p.theme.breakpoints.tab} {
    display: flex;
    justify-content: space-between;
  }
`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  ${p => p.theme.breakpoints.tab} {
    max-width: 500px;
    row-gap: 16px;
  }

  ${p => p.theme.breakpoints.desc} {
    max-width: 1000px;
  }
`;

export const Item = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.36;
  letter-spacing: 0.04em;
  padding: 8px 28px;
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  cursor: pointer;

  :hover,
  :focus {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-1%, -1%);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25),
      -4px -4px 6px rgba(255, 255, 255, 0.3);
  }

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  ${p => p.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;
