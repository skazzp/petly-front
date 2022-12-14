import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: flex-start;
`;
export const Div = styled.div`
  background-color: rgb(255, 255, 255);
  z-index: 15;
  width: 250px;
  padding: 60px 20px 40px;
  border-radius: 20px;
  position: relative;
`;
export const ImageWrapper = styled.div`
  position: relative;
`;
export const Status = styled.div`
  width: 160px;
  height: 28px;
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  border-radius: 0px 16px 16px 0px;
  top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StatusText = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;
export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  width: 195px;
  margin: 0;
  padding-top: 16px;
`;
export const ListWrapper = styled.div`
  display: flex;
  gap: 55px;
  padding-top: 16px;
`;
export const FirstList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const SecondList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const FirstItems = styled.li`
  > p :last-child {
    padding-bottom: 0;
  }
`;
export const Text = styled.p`
  margin: 0;
  padding-bottom: 8px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

export const TextSecond = styled.p`
  margin: 0;
  padding-bottom: 8px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`;
export const P = styled.p`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin: 0;
  padding-top: 28px;
`;
export const ListButtons = styled.ul`
  list-style: none;
  margin: 0;
  padding: 40px 0 0 0;
  display: flex;
  align-content: stretch;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;
export const Btn = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: inherit;
  :hover {
    background-color: #f59256;
    color: #ffffff;
  }
`;
export const TxtWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;
export const Svg = styled.svg`
  width: 28px;
  height: 28px;
  border-radius: 50%;

  background: #fdf7f2;
  backdrop-filter: blur(2px);
  position: absolute;
  right: 30px;
  top: 20px;
`;
export const TextBtn = styled.p`
  margin: 0;
`;
export const SvgHeart = styled.svg`
  width: 16px;
  height: 16px;
  padding-left: 10px;
`;
