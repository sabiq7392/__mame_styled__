import { Button } from "../../HtmlTag.styled";
import { RiMenu4Fill } from "react-icons/ri";
import { any, bool, func, node } from "prop-types";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";

export default function NavbarToggleMenu({ 
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
          border: "1px solid rgba(255,255,255, 0.1)",
          borderRadius: 2,
          cursor: "pointer",
        },
        cssLg: {
          display: "none",
        },
      }),
    },
    icon || <RiMenu4Fill size={32} color="white" />,
  );
}

NavbarToggleMenu.propTypes = {
  menuButton: any.isRequired,
  isMenuOpen: bool.isRequired,
  setIsMenuOpen: func.isRequired,
  icon: node,
  ...requiredPropTypes,
};
