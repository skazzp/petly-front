import styled from 'styled-components';

export const ModalContainer = styled.div`

position: fixed;
width: 100%;
height: 100%;
top: ${p=>p.header}px;
left: 0;
background-color: ${p => p.theme.colors.background.main};
text-align: center;
`;
