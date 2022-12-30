import styled from 'styled-components';
// не забудьте поставить на батька position relative

export const Validation = styled.p`
  text-align: center;
  position: absolute;
  top: 75%;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.input};
  background: ${p => p.theme.colors.background.main};
  /* font-family: ${p => p.theme.fonts.main};
  font-weight: 400; */
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.validation};
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.warning};
  width: 74%;
  animation: show 1000ms cubic-bezier(0.43, 0.21, 0, 1.03);
  animation-iteration-count: revert-layer;
  /* transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03); */

  @keyframes show {
    0% {
      transform: translateX(-200px);
    }

    50% {
      transform: translateX();
    }

    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX();
    }
    0% {
      transform: translateX(-200px);
    }
  }
  :focus,
  :hover {
    transform: 1000ms cubic-bezier(0.43, 0.21, 0, 1.03);
    /* transition: 1000ms cubic-bezier(0.43, 0.21, 0, 1.03); */
    height: 40%;
    width: 80%;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.validationHover};
  }
`;
