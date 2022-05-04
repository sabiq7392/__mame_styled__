import { A, Img } from "../../HtmlTag";
import { string, node } from "prop-types";
import { requiredPropTypes, requiredProps } from "../../../utils/constants/requiredProps";
import { createElement } from "react";
import { number } from "prop-types";
import { requiredIf } from "../../../../../src/utils/CustomPropTypes";

export default function NavbarBrand({ children, src, alt, width, height, ...props }) {
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
  src: (props, propName, componentName) => requiredIf(
    props, propName, componentName, { notExistProps: ["children", "alt"], shouldType: "string" }
  ),
  alt: string,
  children: node,
  height: number,
  width: number,
  ...requiredPropTypes,
};
