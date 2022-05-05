import { Button } from "../../HtmlTag";
import { any, bool, func, node } from "prop-types";
import { createElement, memo } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";

const NavbarToggleMenu = memo(function NavbarToggleMenu({ 
  menuButton, 
  isMenuOpen, 
  setIsMenuOpen, 
  icon,
  ...props
}) {
  return createElement(
    Button,
    {
      ref: menuButton,
      onClick: () => setIsMenuOpen(!isMenuOpen),
      ...requiredProps(props, {
        cssXs: {
          display: "grid",
          placeItems: "center",
          background: "rgba(0,0,0,0)",
          minWidth: 44,
          minHeight: 44,
          marginLeft: "auto",
          // border: "1px solid rgba(255,255,255, 0.1)",
          border: "none",
          borderRadius: 2,
          cursor: "pointer",
        },
        cssLg: {
          display: "none",
        },
      }),
    },
    icon || isMenuOpen ? <CloseIcon /> : <MenuIcon />,
  );
});

NavbarToggleMenu.propTypes = {
  menuButton: any.isRequired,
  isMenuOpen: bool.isRequired,
  setIsMenuOpen: func.isRequired,
  icon: node,
  ...requiredPropTypes,
};

export default NavbarToggleMenu;
