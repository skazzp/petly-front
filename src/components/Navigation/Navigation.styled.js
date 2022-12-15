import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: flex-end; 
align-items: center;
width: 100%;
@media screen and (min-width: 1280px) {
    justify-content: space-between;
}
`
export const MenuIcon = styled.svg`
width: 30px;
height: 20px;
`
export const Box = styled(Container)`
justify-content: space-between;
margin-bottom: 46px;
@media screen and (min-width: 768px) {
    margin-bottom: 88px;
}`

export const CloseIcon = styled.svg`
width: 40px;
height: 40px;
`