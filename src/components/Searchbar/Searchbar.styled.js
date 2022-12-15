import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

export const HesderSearchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background.main};

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  background-color: ${props => props.theme.colors.background.white};
  border-radius: ${props => props.theme.radii.lg};
  overflow: hidden;

  ${props => props.theme.breakpoints.tab} {
    max-width: 608px;
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border: 0;

  background-color: ${props => props.theme.colors.background.white};
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }

  ${props => props.theme.breakpoints.tab} {
    width: 44px;
    height: 44px;
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  border: none;
  outline: none;
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  padding-top: ${props => props.theme.space[1]}px;
  padding-bottom: ${props => props.theme.space[1]}px;
  ::placeholder {
    font: inherit;
    font-size: ${props => props.theme.fontSizes.ml};
    line-height: ${props => props.theme.lineHeights.main};
  }

  ${props => props.theme.breakpoints.tab} {
    font-size: ${props => props.theme.fontSizes.ml};
    line-height: ${props => props.theme.lineHeights.main};
    padding-left: ${props => props.theme.space[4]}px;
    padding-right: ${props => props.theme.space[4]}px;
    ::placeholder {
      font: inherit;
      font-size: ${props => props.theme.fontSizes.m};
      line-height: ${props => props.theme.lineHeights.main};
    }
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const IconSearch = styled(BiSearchAlt2)`
  width: 20px;
  height: 20px;
  margin: auto;

  ${props => props.theme.breakpoints.tab} {
    width: 24px;
    height: 24px;
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;
