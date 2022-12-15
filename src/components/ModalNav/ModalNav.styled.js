import styled from "styled-components";

export const ModalContainer = styled.div`
box-sizing: border-box;
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background-color: #FDF7F2;
text-align: center;
padding: 16px 20px 0 20px;
@media screen and (min-width: 768px) {
    padding: 24px 32px 0 32px;
}
@media screen and (min-width: 1280px) {
    padding: 16px 20px 0 20px;
}
`