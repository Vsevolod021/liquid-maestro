const mobile = 'only screen and (max-width: 600px)';
const tablet = 'only screen and (max-width: 1200px)';

export const isMobile = () => window.matchMedia(mobile).matches;
export const isTablet = () => window.matchMedia(tablet).matches;
