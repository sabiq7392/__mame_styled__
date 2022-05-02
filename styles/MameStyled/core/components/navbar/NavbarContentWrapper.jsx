import { node } from "prop-types";
import { Div } from "../../HtmlTag.styled";

export default function NavbarContentWrapper({ children }) {
  return (
    <Div 
      cssXs={{ 
        display: "grid",
        height: "100%",
        transition: "200ms",
        background: "inherit",
      }} 
      cssLg={{ display: "flex" }}
    >
      {children}
    </Div>
  );
}

NavbarContentWrapper.propTypes = {
  children: node.isRequired,
};
