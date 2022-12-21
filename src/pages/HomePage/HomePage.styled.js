import styled from "styled-components";


export const TitleThumb = styled.div`
padding: 60px 0 60px 20px;
max-width: 281px;
box-sizing: content-box;
${p=>p.theme.breakpoints.tab} {
max-width: 588px;
padding: 94px 0 100px 32px;
}
${p=>p.theme.breakpoints.desc} {
padding: 92px 0 0 16px;
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