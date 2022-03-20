import screen from './screen.config';

export const getHover = props => ({
  ':hover': props.hover
});

export const getHoverSm = props => ({ 
  [`@media (${screen.sm})`]: props.hoverSm,
});

export const getHoverMd = props => ({
  [`@media (${screen.md})`]: props.hoverMd,
});

export const getHoverLg = props => ({ 
  [`@media (${screen.lg})`]: props.hoverLg, 
});

export const getHoverXl = props => ({
  [`@media (${screen.xl})`]: props.hoverXl,
});

export const getHoverXxl = props => ({
  [`@media (${screen.xxl})`]: props.hoverXxl,
});