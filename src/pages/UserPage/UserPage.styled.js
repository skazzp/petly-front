import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${p => p.theme.breakpoints.desc} {
    flex-direction: row;
    margin-left:auto;
    margin-right:auto;
    width: 1280px;
  }
`;
