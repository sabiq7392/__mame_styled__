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
