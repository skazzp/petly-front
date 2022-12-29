import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${p => p.theme.breakpoints.desc} {
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: calc(100vh - 68px);
  }
`;
