import { Div } from "../../HtmlTag";
import { createElement, memo, ReactNode, useEffect, useState, ReactElement } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  children: ReactNode | ReactNode[],
  refNavbar: any,
  isMenuOpen: boolean,
}

const NavbarNav = memo(function NavbarNav({ children, refNavbar, isMenuOpen, ...props }: Props): ReactElement {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const _refNavbar =  refNavbar.current;

    const getNavbarHeight = () => new ResizeObserver((entries) => {
      const navbarHeight = (entries[0].target as HTMLElement).offsetHeight;

      return setNavbarHeight(navbarHeight);
    });


    getNavbarHeight().observe(_refNavbar);

    return (): void => {
      getNavbarHeight().unobserve(_refNavbar);
    };
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

export default NavbarNav;
