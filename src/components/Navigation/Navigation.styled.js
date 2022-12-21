import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: flex-end; 
align-items: center;
width: 100%;
${p=>p.theme.breakpoints.desc} {
    justify-content: space-between;
}
`
export const Box = styled.div`
padding-top: 46px;
${p=>p.theme.breakpoints.tab} {
    padding-top: 88px;
}`


