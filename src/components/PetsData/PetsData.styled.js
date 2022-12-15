import styled from 'styled-components';

export const Board = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
width: 320px;
padding-left: 20px;
padding-right: 20px;

margin-top: 40px;
  @media (min-width: 768px) {
    width: 768px;
    padding-left:  32px;
    padding-right:32px;
  }
  @media (min-width: 1200px) {
   width: 821px;
   padding-left: 16px;
   padding-right: 16px;
  } 
`;


export const Titles=styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;


`

export const Title=styled.h2`
margin: 0;
font-weight: 500;
font-size: 20px;
line-height: 1.35;
color: #111111;
font-family: 'Manrope, sans-serif';
margin-bottom:32px;

@media (min-width: 768px) {
       
font-size: 28px;
}
`
export const Button =styled.button`

border-radius: 50%;
width: 40px;
height: 40px;
background: #F59256;
color: #FFFFFF;
margin-left: 15px;
border:none;
margin-bottom:25px;
cursor: pointer;
padding:8px;
padding-top: 10px;
&:hover,
&:focus {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.2);
    background: #f58b49;
}
&:active {
  /* background-color: #3e8e41;
  box-shadow: 0 5px #666; */
  transform: translateY(4px);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.3);
    background: #f58b49;
}

`
export const TitleAdd = styled.span`
@media (min-width: 768px) {
       
       font-size: 20px;
       }
`
export const Add =styled.div`
display: flex;
align-items: flex-end;
`

export const Icon= styled.svg`
width: 16px;
  height: 16px;
  color: rgba(17, 17, 17, 0.6);
`