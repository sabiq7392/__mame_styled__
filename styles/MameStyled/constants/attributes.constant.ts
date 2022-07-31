import debug from "../stylings/debug.styling";
import css from "../stylings/css.styling";
import hover from "../stylings/hover.styling";
import { globalResponsiveProps } from "./responsive-props.constant";

const attributes = [
  debug, 
  css,
  hover, 
  ...globalResponsiveProps,
] as const;

export default attributes;
