import styled from "styled-components";


export const TitleThumb = styled.div`
padding-top: 60px;
padding-bottom: 60px;
max-width: 280px;
position: relative;
${p=>p.theme.breakpoints.tab} {
max-width: 588px;
padding-top: 94px;
padding-bottom: 100px;
margin-left: ${p=>p.theme.space[0]}px;
}
${p=>p.theme.breakpoints.desc} {
padding-top: 92px;
}
`

export const Title = styled.h1`
color: ${p=>p.theme.colors.fullBlack};
font-size: ${p=>p.theme.fontSizes.titleSmall};
${p=>p.theme.breakpoints.tab} {
line-height: ${p=>p.theme.lineHeights.title};
font-size: ${p=>p.theme.fontSizes.titleBig};
}
`