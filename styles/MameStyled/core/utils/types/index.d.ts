import { CSSProperties } from "react";
import { H1, H2, H3, H4, H5, H6 } from "../../HtmlTag";

export type THead = typeof H1 | typeof H2 |  typeof H3 | typeof H4 |  typeof H5 |  typeof H6;

export type ResponsiveCss = {
  xs?: string | number,
  sm?: string | number,
  md?: string | number,
  lg?: string | number,
  xl?: string | number,
  xxl?: string | number,
};

export type MameCss = {
  css?: CSSProperties,
  cssXs?: CSSProperties,
  cssSm?: CSSProperties,
  cssMd?: CSSProperties,
  cssLg?: CSSProperties,
  cssXl?: CSSProperties,
  cssXxl?: CSSProperties,
};

export type MameHover = {
  hover?: CSSProperties,
  hoverXs?: CSSProperties,
  hoverSm?: CSSProperties,
  hoverMd?: CSSProperties,
  hoverLg?: CSSProperties,
  hoverXl?: CSSProperties,
  hoverXxl?: CSSProperties,
}

export interface Attributes extends MameCss, MameHover {
  debug?: true,
}

export type FlexDirection = (
  "column" | 
  "inherit" | 
  "-moz-initial" | 
  "initial" | 
  "revert" | 
  "unset" | 
  "column-reverse" | 
  "row" | 
  "row-reverse" | 
  undefined
);
