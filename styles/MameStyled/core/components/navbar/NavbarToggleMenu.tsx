import { Button } from "../../HtmlTag";
import { createElement, memo, ReactElement, ReactNode, SetStateAction, useRef } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  isMenuOpen: boolean,
  // eslint-disable-next-line no-unused-vars
  setIsMenuOpen: (value: SetStateAction<boolean>) => void,
  icon?: ReactNode,
}

const NavbarToggleMenu = memo(function NavbarToggleMenu({ isMenuOpen, setIsMenuOpen, icon, ...props }: Props): ReactElement {
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

export default NavbarToggleMenu;
