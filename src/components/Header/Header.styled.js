import styled from 'styled-components';
export const Container  = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px 20px 0 20px;

${p=>p.theme.breakpoints.tab} {
padding: 20px 32px 0 32px;
}
${p=>p.theme.breakpoints.desc} {
padding: 20px 16px 0 16px;
}
`
