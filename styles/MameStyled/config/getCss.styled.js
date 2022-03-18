import screen from './screen.config';

export const getCss = props => props.css;
export const getCssSm = props => ({ 
  [`@media (${screen.sm})`]: props.cssSm,
});

export const getCssMd = props => ({
  [`@media (${screen.md})`]: props.cssMd,
});

export const getCssLg = props => ({ 
  [`@media (${screen.lg})`]: props.cssLg, 
});

export const getCssXl = props => ({
  [`@media (${screen.xl})`]: props.cssXl,
});

export const getCssXxl = props => ({
  [`@media (${screen.xxl})`]: props.cssXxl,
});
