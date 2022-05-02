import { A, Img } from "../../HtmlTag.styled";
import { string, node } from "prop-types";
import { requiredPropTypes, requiredProps } from "../../../utils/constants/requiredProps";
import { createElement } from "react";

export default function NavbarBrand({ children, src, alt, ...props }) {
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
    children || <Img src={src} alt={alt} />,
  );
}

NavbarBrand.propTypes = {
  src: string,
  alt: string,
  children: node,
  ...requiredPropTypes,
};
