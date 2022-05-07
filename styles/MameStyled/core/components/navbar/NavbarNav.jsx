import { bool, node } from "prop-types";
import { Div } from "../../HtmlTag";
import { createElement, memo, useEffect, useState } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";

const NavbarNav = memo(function NavbarNav({ 
  children, 
  refNavbar, 
  isMenuOpen, 
  ...props 
}) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const getNavbarHeight = () => {
      const observer = new ResizeObserver((entries) => {
        const navbarHeight = entries[0].target.offsetHeight;
  
        return setNavbarHeight(navbarHeight);
      });
  
      observer.observe(refNavbar.current);
    };

    getNavbarHeight();
  }, [refNavbar]);

  return createElement(
    Div,
    { 
      ...requiredProps(props, 
        { cssXs: { 
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
              visibility: "hidden",
            },
          },
        }, 
        cssLg: {
          display: "flex", 
          flexDirection: "row",
          position: "static",
          height: "auto!important", 
          transition: "0ms!important",
          animation: "none",
        }, 
      }),
    },
    children,
  );
});

NavbarNav.propTypes = {
  children: node.isRequired,
  isMenuOpen: bool.isRequired,
  ...requiredPropTypes,
};

export default NavbarNav;
