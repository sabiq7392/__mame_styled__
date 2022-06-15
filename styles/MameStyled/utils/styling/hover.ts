import screen from "../../config/screen.config";

interface Props {
  hover?: any,
  hoverXs?: any,
  hoverSm?: any,
  hoverMd?: any,
  hoverLg?: any,
  hoverXl?: any,
  hoverXxl?: any,
}

const hover = (props: Props) => ({
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
