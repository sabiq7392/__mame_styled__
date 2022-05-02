import { any, oneOf, node, string } from "prop-types";
import { Nav } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";

export default function Navbar({ 
  children, 
  navbar, 
  position, 
  direction, 
  ...props
}) {
  return createElement(
    Nav,
    { 
      ref: navbar,
      ...requiredProps(props, {
        cssXs: {
          background: "#111", 
          position: position || "relative", 
          zIndex: 100,
          width: "100%",
          top: direction === "top" && 0,
          bottom: direction === "bottom" && 0,
          padding: "1rem",
        },
        cssLg: {
          padding: "0.5rem 2rem",
        },
      }),
    },
    children,
  );
}

Navbar.propTypes = {
  children: node.isRequired,
  navbar: any.isRequired,
  position: string,
  direction: oneOf(["top", "bottom"]),
  ...requiredPropTypes,
};
