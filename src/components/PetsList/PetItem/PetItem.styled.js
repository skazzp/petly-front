import styled from 'styled-components';

export const Card = styled.div`
box-sizing: border-box;

box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
min-width: 280px;
height: auto;
border-radius: 20px;
padding: 16px 20px;
background-color: white;
margin-bottom: 20px;
@media (min-width: 768px) {
    min-width: 704px;
    display: flex;
    gap: 32px;
    padding: 20px 20px;
}
@media (min-width: 1200px) {
    width: 821px;
} 
`;


export const Img = styled.img`
width: 240px;
height: 240px;
border-radius: 20px;
margin-left: auto;
margin-right: auto;
object-fit: cover;
@media (min-width: 768px) {
    width: 161px;
height: 161px;
}
`;




export const Li = styled.li`
font-weight: 500;
font-size: 14px;
line-height: 1.35;
color: #000000;
&:not(:last-child){
    margin-bottom:12px;
}
@media (min-width: 768px) {
    font-size: 16px;
}

`;
export const Ul = styled.ul`
position: relative;
list-style: none;
margin: 0;
padding: 0;
gap: 12px;

margin-top:20px;
margin-bottom:20px;
@media (min-width: 768px) {
    margin: 0;
}
`;

export const ButtonDel = styled.button`
position: absolute;
right: 0;
top: 0;
/* color: #000678; */
/* background-color: #ffffff; */
padding: 0;
width: 20px;
  height: 20px;
cursor: pointer;
display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover svg{
    background-color: red;
  }

`

export const Icon= styled.svg`
width: 20px;
  height: 20px;
  /* fill: rgba(17, 17, 17, 0.6); */
  fill: red;
  &:hover{
    fill: red;

  }

`