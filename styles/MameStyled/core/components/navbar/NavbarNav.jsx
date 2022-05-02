import { bool, node, number } from "prop-types";
import { Div } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";



export default function NavbarNav({ children, navbarHeight, isMenuOpen, ...props }) {
  const cssXs = { 
    display: "flex",
    flexDirection: "column",
    transition: "width 500ms", 
    position: "absolute",
    right: 0,
    top: navbarHeight,
    zIndex: 2,
    animation: isMenuOpen ? "menu-open 500ms forwards" : "menu-close 500ms forwards",
    background: "inherit",
    overflow: "hidden",
    ["@keyframes menu-open"]: {
      from: {
        width: 0,
      },
      to: {
        width: "100%",
      },
    },
    ["@keyframes menu-close"]: {
      from: {
        width: "100%",
      },
      to: {
        width: 0,
        visibility: "hidden"
      },
    },
  };

  const cssLg = { 
    display: "flex", 
    flexDirection: "row",
    position: "static",
    height: "auto!important", 
    transition: "0ms!important",
    animation: "none",
  };

  return createElement(
    Div,
    { ...requiredProps(props, { cssXs, cssLg }) },
    children,
  );
}

NavbarNav.propTypes = {
  children: node.isRequired,
  navbarHeight: number.isRequired,
  isMenuOpen: bool.isRequired,
  ...requiredPropTypes,
};
