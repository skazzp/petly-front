import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${p => p.theme.breakpoints.tab} {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  ${p => p.theme.breakpoints.tab} {
    max-width: 475px;
  }

  ${p => p.theme.breakpoints.desc} {
    max-width: 1000px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const BtnStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 44px;
  padding: 10px 28px;
  font-size: 20px;
  letter-spacing: 0.04em;
  border: ${p => p.theme.borders.normal};
  border-radius: 40px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  ${p => p.theme.breakpoints.tab} {
    max-width: 475px;
  }

  ${p => p.theme.breakpoints.desc} {
    max-width: none;
  }
`;
