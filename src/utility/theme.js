export const theme = {
  colors: {
    black: '#111111',
    white: '#FFFFFF',
    accent: '#F59256',
    orange: '#FF6101',
    fullBlack: '#000000',
    blackLink: '#181C27',
    grey: 'rgba(17, 17, 17, 0.6)',

    background: {
      white: '#FFFFFF',
      main: '#FDF7F2',
      backdrop: 'rgba(17, 17, 17, 0.6)',
      modalInput: 'rgba(245, 146, 86, 0.5)',
      popup: 'rgba(255, 255, 255, 0.6)',
      content: '#111321',
      accent: '#F59256',
    },
  },
  space: [0, 8, 12, 16, 20, 32, 40, 50, 80, 110],
  fonts: {
    main: 'Manrope, sans-serif',
    secondary: 'Poppins, sans-serif',
  },
  fontFamily: {
    title: 'Poppins'
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    ml: '20px',
    l: '24px',
    xl: '28px',
    xxl: '48px',
    titleSmall: '32px',
    titleBig: '68px',
  },
  fontWeights: {
    normal: 400,
    semiBold: 500,
    bold: 700,
  },
  lineHeights: {
    main: 1.38,
    secondary: 1.36,
    title: 1.47,
    logo: 1.5,
  },
  letterSpacing: {
    normal: '0.04em',
    logo: '0.07em',
  },
  borders: {
    none: 'none',
    normal: '2px solid #F59256',
    input: '1px solid rgba(245, 146, 86, 0.5)',
  },
  radii: {
    none: '0',
    // sm: '10px',
    md: '20px',
    lg: '40px',
    round: '50%',
  },
  breakpoints: {
    mob: '',
    tab: '@media screen and (min-width: 768px)',
    desc: '@media screen and (min-width: 1280px)',
    onlyMob: '@media screen and (max-width: 767px)'
  },
  retina: {
    double: '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)',
  },

};
