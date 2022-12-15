import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
