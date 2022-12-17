import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => useMediaQuery({ maxWidth: 767.98 });
export const useIsTablet = () => useMediaQuery({minWidth: 768, maxWidth: 1279.98 });
export const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });
export const useIsMobileOrTablet = () => useMediaQuery({ maxWidth: 1279.98})


