import { oneOf, node, string } from "prop-types";
import { Nav } from "../../HtmlTag";
import { createElement, memo } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";

const Navbar = memo(function Navbar({
  children, 
  position, 
  direction, 
  ...props
}) {
  return createElement(
    Nav,
    { 
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
});

Navbar.propTypes = {
  children: node.isRequired,
  position: string,
  direction: oneOf(["top", "bottom"]),
  ...requiredPropTypes,
};

export default Navbar;
