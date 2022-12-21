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
export const Box = styled(Container)`
justify-content: space-between;
margin-bottom: 46px;
${p=>p.theme.breakpoints.tab} {
    margin-bottom: 88px;
}`


