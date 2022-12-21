import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';

export const Container = styled.div`
  margin-top: 12px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  background: #ffffff;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  ${props => props.theme.breakpoints.tab} {
    width: 335px;

    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  ${props => props.theme.breakpoints.desc} {
    width: 392px;
  }
`;

// export const Box = styled.div`

//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1280px) {
//     width: 395px;
//   }
// `;

export const Title = styled.a`
  padding-top: 14px;
  display: block;
  font-size: 12px;
  line-height: ${props => props.theme.lineHeights.main};
  text-align: center;
  text-decoration-line: underline;
  color: ${props => props.theme.colors.accent};

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperIMG = styled.div`
  flex-grow: 0;
  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperContent = styled.div`
  flex-grow: 1;
  font-weight: 500;
  font-size: 12px;
  line-height: ${props => props.theme.lineHeights.main};
  color: #111111;
  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  padding: 0px;
  width: 110px;
  height: 78px;
  margin-top: 10px;
  margin-left: 4px;
  margin-right: 14px;
  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperTimeHover = styled.div`
display:none;
position:absolute;
top:0;
left:0;
`

export const Data = styled.div`
position:relative;
  margin-top: 12px;
  div {
  }
  &:hover {
    color: red;
    div {
      display: block;
      
    }
  }

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;



export const Address = styled.div`
  margin-top: 4px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const IconAddress = styled(GoLocation)`
  fill: ${props => props.theme.colors.accent};
  margin-left: 10px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Email = styled.div`
  margin-top: 4px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Phone = styled.div`
  margin-top: 4px;
  margin-bottom: 12px;

  ${props => props.theme.breakpoints.tab} {
  }

  ${props => props.theme.breakpoints.desc} {
  }
`;

// ${props => props.theme.breakpoints.tab} {

// }

// ${props => props.theme.breakpoints.desc} {

// }
