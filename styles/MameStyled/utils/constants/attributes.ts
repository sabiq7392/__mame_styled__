import debug from "../styling/debug";
import css from "../styling/css";
import hover from "../styling/hover";
import { globalResponsiveProps } from "./globalResponsiveProps";

const attributes = [
  debug, 
  css,
  hover, 
  ...globalResponsiveProps,
] as const;

export default attributes;
