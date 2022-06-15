import screen from "../../config/screen.config";

interface Props {
  css?: any,
  cssXs?: any,
  cssSm?: any,
  cssMd?: any,
  cssLg?: any,
  cssXl?: any,
  cssXxl?: any,
}

const css = (props: Props) => ({
  [`@media (${screen.xs})`]: props.css || props.cssXs,
  [`@media (${screen.sm})`]: props.cssSm,
  [`@media (${screen.md})`]: props.cssMd,
  [`@media (${screen.lg})`]: props.cssLg,
  [`@media (${screen.xl})`]: props.cssXl,
  [`@media (${screen.xxl})`]: props.cssXxl,
});

export default css;
