import { CSSProperties } from "react";
import { CSSProp } from "styled-components";
import { object, string } from "prop-types";
import { HTMLTag } from "../core/utils/types";

type IsCssProps = CSSProp | CSSProperties;

interface RequiredProps extends HTMLTag {
  cssXs?: IsCssProps;
  cssSm?: IsCssProps; 
  cssMd?: IsCssProps;
  cssLg?: IsCssProps;
  cssXl?: IsCssProps;
  cssXxl?: IsCssProps;
  hover?: IsCssProps;
  hoverXs?: IsCssProps;
  hoverSm?: IsCssProps;
  hoverMd?: IsCssProps;
  hoverLg?: IsCssProps;
  hoverXl?: IsCssProps;
  hoverXxl?: IsCssProps;
}

export const requiredProps = (props: any, { 
  cssXs, 
  cssSm, 
  cssMd, 
  cssLg, 
  cssXl, 
  cssXxl,
  hoverXs,
  hoverSm,
  hoverMd,
  hoverLg,
  hoverXl,
  hoverXxl,
  className,
}: RequiredProps) => ({
  cssXs: { ...cssXs as object, ...props.cssXs },
  cssSm: { ...cssSm as object, ...props.cssSm },
  cssMd: { ...cssMd as object, ...props.cssMd },
  cssLg: { ...cssLg as object, ...props.cssLg },
  cssXl: { ...cssXl as object, ...props.cssXl },
  cssXxl: { ...cssXxl as object, ...props.cssXl },
  hoverXs: { ...hoverXs as object, ...props.hoverXs },
  hoverSm: { ...hoverSm as object, ...props.hoverSm },
  hoverMd: { ...hoverMd as object, ...props.hoverMd },
  hoverLg: { ...hoverLg as object, ...props.hoverLg },
  hoverXl: { ...hoverXl as object, ...props.hoverXl },
  hoverXxl: { ...hoverXxl as object, ...props.hoverXxl },
  // ref: props._ref,
  debug: props.debug && true,
  className: (className ??= "") + " " + (props.className ??= ""),
  id: props.id,
  fontSize: props.fontSize,
});

export const requiredPropTypes = {
  cssXs: object,
  cssSm: object,
  cssMd: object,
  cssLg: object,
  cssXl: object,
  cssXxl: object,
  className: string,
  id: string,
};
