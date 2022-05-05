import { any } from "prop-types";
import { object, string } from "prop-types";

export const requiredProps = (props, { 
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
}) => ({
  cssXs: { ...cssXs, ...props.cssXs },
  cssSm: { ...cssSm, ...props.cssSm },
  cssMd: { ...cssMd, ...props.cssMd },
  cssLg: { ...cssLg, ...props.cssLg },
  cssXl: { ...cssXl, ...props.cssXl },
  cssXxl: { ...cssXxl, ...props.cssXl },
  hoverXs: { ...hoverXs, ...props.hoverXs },
  hoverSm: { ...hoverSm, ...props.hoverSm },
  hoverMd: { ...hoverMd, ...props.hoverMd },
  hoverLg: { ...hoverLg, ...props.hoverLg },
  hoverXl: { ...hoverXl, ...props.hoverXl },
  hoverXxl: { ...hoverXxl, ...props.hoverXxl },
  // ref: props._ref,
  debug: props.debug && true,
  className: props.className,
  id: props.id,
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
  ref: any,
};
