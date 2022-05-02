import { any, oneOf, object, node, string } from "prop-types";
import { Nav } from "../../HtmlTag.styled";

export default function Navbar({ 
  children, 
  navbar, 
  position, 
  direction, 
  cssXs,
  cssSm,
  cssMd,
  cssLg,
  cssXl,
  cssXxl,
}) {
  return (
    <Nav 
      ref={navbar}
      cssXs={{ 
        background: "#111", 
        position: position || "relative", 
        zIndex: 100,
        width: "100%",
        top: direction === "top" && 0,
        bottom: direction === "bottom" && 0,
        padding: "0.5rem",
        ...cssXs,
      }}
      cssSm={cssSm}
      cssMd={cssMd}
      cssLg={{ 
        padding: "0.5rem 2rem", 
        ...cssLg ,
      }}
      cssXl={cssXl}
      cssXxl={cssXxl}
    >
      {children}
    </Nav>
  );
}

Navbar.propTypes = {
  children: node.isRequired,
  navbar: any.isRequired,
  position: string,
  direction: oneOf(["top", "bottom"]),
  cssXs: object,
  cssSm: object,
  cssMd: object,
  cssLg: object,
  cssXl: object,
  cssXxl: object
};
