import { A, Img } from "../../HtmlTag";
import { string, node } from "prop-types";
import { requiredPropTypes, requiredProps } from "../../../utils/constants/requiredProps";
import { createElement } from "react";
import { number } from "prop-types";
import ErrorCannotCombinedProps from "../../utils/handle-error/ErrorCannotCombinedProps";

export default function NavbarBrand({ 
  children, 
  src, 
  alt, 
  width, 
  height, 
  ...props 
}) {
  if (children && (src || alt || width || height)) {
    ErrorCannotCombinedProps({ 
      componentName: "NavbarBrand", 
      note: "Cannot combined props children with: src || alt || width || height" 
    })
  } 

  return createElement(
    A, 
    { 
      ...requiredProps(props, { 
        cssXs: {
          display: "grid",
          placeItems: "center",
        },
      }),
    }, 
    children || <Img src={src} alt={alt} width={width} height={height} />,
  );
}

NavbarBrand.propTypes = {
  src: string,
  alt: string,
  children: node,
  height: number,
  width: number,
  ...requiredPropTypes,
};
