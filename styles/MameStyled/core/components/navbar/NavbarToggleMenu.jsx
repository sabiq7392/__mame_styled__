import { Button } from "../../HtmlTag.ts";
import { bool, func, node } from "prop-types";
import { createElement, memo, useRef } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";

const NavbarToggleMenu = memo(function NavbarToggleMenu({ 
  isMenuOpen, 
  setIsMenuOpen, 
  icon,
  ...props
}) {
  const menuButton = useRef();

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
  isMenuOpen: bool.isRequired,
  setIsMenuOpen: func.isRequired,
  icon: node,
  ...requiredPropTypes,
};

export default NavbarToggleMenu;
