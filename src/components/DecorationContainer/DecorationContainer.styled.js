import styled from "styled-components";
import Wave from '../../assets/images/bg-home-page-mobile.svg'
import Group1 from '../../assets/images/Group1.svg';
import Group2 from '../../assets/images/Group2.svg';
import Frame from '../../assets/images/Frame26.svg';
import Circle from '../../assets/images/Circle.svg';
import Heart from '../../assets/images/Heart.svg';
import SmileGirlMobile1x from '../../assets/images/bg/Bg-girl-mobile-1x.png';
import SmileGirlMobile2x from '../../assets/images/bg/Bg-girl-mobile-2x.png';
import SmileGirlTablet1x from '../../assets/images/bg/Bg-girl-tablet-1x.png';
import SmileGirlTablet2x from '../../assets/images/bg/Bg-girl-tablet-2x.png';
import SmileGirlDesk1x from '../../assets/images/bg/Bg-girl-desc-1x.png';
import SmileGirlDesk2x from '../../assets/images/bg/Bg-girl-desc-2x.png';

export const WaveSmall = styled.div`
z-index: -2;
height: 470px;
width: 620px;
position: fixed;
bottom: -14px;
right: -214px;
background-image:  
url(${Wave});
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;

${p => p.theme.breakpoints.tab} {
height: 1098px;
width: 1449px;
transform: rotate(-8deg);
top: 167px;
right: -550px;
}
`
export const WaveLight = styled.div`
z-index: -2;
height: 826px;
width: 1091px;
position: fixed;
bottom: -491px;
right: 293px;
background-image:  
url(${Group1});
background-repeat: no-repeat;
background-size: contain;
background-position: bottom;
`
export const WaveDark = styled.div`
z-index: -3;
height: 685px;
width: 1068px;
position: fixed;
bottom: -282px;
right: 206px;
background-image:  
url(${Group2});
background-repeat: no-repeat;
background-size: contain;
background-position: bottom;
`
export const WaveCircle = styled.div`
z-index: -3;
height: 63px;
width: 63px;
position: fixed;
bottom: 223px;
right: 830px;
background-image:  
url(${Circle});
background-repeat: no-repeat;
background-size: contain;
background-position: bottom;
`
export const WaveHeart = styled.div`
z-index: -3;
height: 89px;
width: 92px;
position: fixed;
bottom: 509px;
right: 476px;
background-image:  
url(${Heart});
background-repeat: no-repeat;
background-size: contain;
background-position: bottom;
`
export const WaveFrame =styled.div`
z-index: -3;
height: 393px;
width: 511px;
position: fixed;
bottom: 0px;
right: -49px;
background-image:  
url(${Frame});
background-repeat: no-repeat;
background-size: contain;
background-position: bottom;
`
export const WaveGirl =styled.div`
z-index: -1;
height: 337px;
width: 320px;
position: fixed;
bottom: 0px;
right: 0px;
background-repeat: no-repeat;
background-size: contain;
background-position: bottom;
background-image:  
url(${SmileGirlMobile1x});
${p => p.theme.retina.double} {
    background-image:  
url(${SmileGirlMobile2x});
}


${p=>p.theme.breakpoints.tab}{
height: 733px;
width: 699px;
bottom: 0px;
right: 37px;
background-image:  
url(${SmileGirlTablet1x});
${p => p.theme.retina.double} {
    background-image:  
url(${SmileGirlTablet2x});
}

}
${p=>p.theme.breakpoints.desc} {
height: 655px;
width: 624px;
bottom: 0px;
right: 0px;
background-image:  
url(${SmileGirlDesk1x});
    ${p=>p.theme.retina.double} {
        background-image:  
    url(${SmileGirlDesk2x});
    }
}
`
