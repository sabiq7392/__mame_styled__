import { CSSProp } from "styled-components";
import { H1, H2, H3, H4, H5, H6 } from "../../HtmlTag";
import type { AriaAttributes, ChangeEventHandler, HTMLAttributes, MouseEventHandler, ReactNode } from "react";

export type THead = typeof H1 | typeof H2 |  typeof H3 | typeof H4 |  typeof H5 |  typeof H6;

export type ResponsiveCss = {
  xs?: string | number,
  sm?: string | number,
  md?: string | number,
  lg?: string | number,
  xl?: string | number,
  xxl?: string | number,
};

type CSSAllIn = CSSProp | object;

export interface MameCss {
  css?: CSSAllIn,
  cssXs?: CSSAllIn,
  cssSm?: CSSAllIn,
  cssMd?: CSSAllIn,
  cssLg?: CSSAllIn,
  cssXl?: CSSAllIn,
  cssXxl?: CSSAllIn,
}

export type MameHover = {
  hover?: CSSAllIn,
  hoverXs?: CSSAllIn,
  hoverSm?: CSSAllIn,
  hoverMd?: CSSAllIn,
  hoverLg?: CSSAllIn,
  hoverXl?: CSSAllIn,
  hoverXxl?: CSSAllIn,
}

export interface Attributes extends MameCss, MameHover {
  debug?: true,
  as?: any,
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

export interface HTMLTag extends 
HTMLAttributes<HTMLElement>, 
AriaAttributes<HTMLElement> {
  cssXs?: CSSAllIn;
  cssSm?: CSSAllIn; 
  cssMd?: CSSAllIn;
  cssLg?: CSSAllIn;
  cssXl?: CSSAllIn;
  cssXxl?: CSSAllIn;
  hover?: CSSAllIn;
  hoverXs?: CSSAllIn;
  hoverSm?: CSSAllIn;
  hoverMd?: CSSAllIn;
  hoverLg?: CSSAllIn;
  hoverXl?: CSSAllIn;
  hoverXxl?: CSSAllIn;
  as?: any;
  debug?: true;
  fontSize?: ResponsiveCss | number; 
  padding?: ResponsiveCss | number;
  width?: ResponsiveCss | number;
  height?: ResponsiveCss | number;
  display?: ResponsiveCss | number;
  background?: ResponsiveCss | number;
  className?: string;
  onClick?: MouseEventHandler;
  children?: ReactNode | ReactNode[];
  ref?: any;
  onChange?: ChangeEventHandler;
}

export interface IconProps {
  color?: string;
  size?: number;
}
