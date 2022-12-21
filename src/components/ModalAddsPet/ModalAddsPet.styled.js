import styled from 'styled-components';
export const Modal = styled.div`
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const Card = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;

  width: 280px;
  height: auto;
  background: #ffffff;
  border: 0px solid;

  position: relative;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 608px;
    height: auto;
    padding: 40px 80px;
  }
`;

export const CardList = styled.div`
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  @media (min-width: 768px) {
    margin-left: 27px;
    margin-right: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonExit = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;

  width: 34px;
  height: 34px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  fill: rgba(17, 17, 17, 0.6);
  background-color: transparent;
  padding: 7px;

  border-radius: 50%;
  border: 0px solid;
  background: #fdf7f2;
  backdrop-filter: blur(2px);

  &:hover svg {
    fill: #f59256;
  }
`;

export const Icon = styled.svg`
  width: 15px;
  height: 15px;
  color: rgba(17, 17, 17, 0.6);
  padding-bottom: 5px;
  padding-right: 3px;
`;
export const Title = styled.h2`
  text-align: center;
`;

export const Line = styled.p`
  margin: 0;
  position: relative;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.45;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const ErrorText = styled.span`
  color: red;
  font-size: 10px;
  margin: 0;
  position: absolute;
  bottom: 0;
  right: 0;

  /* margin-top: -15px; */
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 240px;
  height: 40px;
  padding: 11px 14px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;

    color: rgba(27, 27, 27, 0.6);

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.6;
    }
  }
  @media (min-width: 768px) {
    width: 448px;
    height: 48px;
  }
`;
export const Comments = styled.textarea`
  box-sizing: border-box;
  padding: 11px 14px;
  width: 240px;
  height: 100px;
  position: relative;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 16px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
    text-align: start;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.6;
    }
  }
  @media (min-width: 768px) {
    width: 394px;
    height: 116px;
  }
`;
export const Img = styled.img`
  width: 208px;
  height: 208px;
  object-fit: cover;
  border-radius: 20px;
  /* margin-left: -5px; */
`;

export const AddList = styled.div`
position: relative;
@media (min-width: 768px) {
   
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;}
`
export const ButtonSet = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  gap: 12px;
  letter-spacing: 0.04em;

  margin-top: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    flex-direction: row-reverse;
  }
`;

export const ButtonA = styled.button`
  cursor: pointer;
  width: 240px;
  height: 40px;
  border: 0px solid;
  background: #f59256;
  border-radius: 40px;
  color: #ffffff;
  :disabled {
    background: #fcdecc;
  }
  @media (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`;

export const ButtonB = styled.button`
  cursor: pointer;
  width: 240px;
  height: 40px;
  background: #ffffff;

  border: 2px solid #f59256;
  border-radius: 40px;

  @media (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`;

export const LabelImage = styled.button`
text-align: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  width: 208px;
  height: 208px;
  /* padding: 100px; */
  background: #fdf7f2;
  border-radius: 20px;

  border: 0px solid;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-left: auto;
  margin-right: auto;
  
}
`;

export const InputImage = styled.input`
  box-sizing: border-box;
  cursor: pointer;
  left: 36px;
  width: 208px;
  height: 208px;
  opacity: 0;
  position: absolute;
  margin-left: -20px;
  padding:0;
  /* z-index: -1;  */
  @media (min-width: 768px) {
   
    margin-top: 32px;
  
}
`;
export const IconPlus = styled.svg`
  width: 48px;
  height: 48px;
  color: rgba(17, 17, 17, 0.6);
`;
export const TitleP = styled.p`
text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 20px;
`;
