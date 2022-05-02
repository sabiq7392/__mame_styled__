import screen from "../../config/screen.config";

const hover = props => ({
  ":hover": props.hover || props.hoverXs,
  [`@media (${screen.sm})`]: {
    ":hover": props.hoverSm,
  },
  [`@media (${screen.md})`]: {
    ":hover": props.hoverMd,
  },
  [`@media (${screen.lg})`]: {
    ":hover": props.hoverLg,
  },
  [`@media (${screen.xl})`]: {
    ":hover": props.hoverXl,
  },
  [`@media (${screen.xxl})`]: {
    ":hover": props.hoverXxl,
  },
});

export default hover;

// export const getHover = props => ({
//   ":hover": props.hover
// });

// export const getHoverSm = props => ({ 
//   [`@media (${screen.sm})`]: props.hoverSm,
// });

// export const getHoverMd = props => ({
//   [`@media (${screen.md})`]: props.hoverMd,
// });

// export const getHoverLg = props => ({ 
//   [`@media (${screen.lg})`]: props.hoverLg, 
// });

// export const getHoverXl = props => ({
//   [`@media (${screen.xl})`]: props.hoverXl,
// });

// export const getHoverXxl = props => ({
//   [`@media (${screen.xxl})`]: props.hoverXxl,
// });
