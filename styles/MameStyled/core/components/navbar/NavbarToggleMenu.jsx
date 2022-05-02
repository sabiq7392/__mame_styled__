import { Button } from "../../HtmlTag.styled";
import { RiMenu4Fill } from "react-icons/ri";
import { any, bool, func } from "prop-types";

export default function NavbarToggleMenu({ menuButton, isMenuOpen, setIsMenuOpen }) {
  return (
    <Button
      ref={menuButton}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      cssXs={{ 
        display: "grid", 
        background: "rgba(0,0,0,0)", 
        width: 44,
        height: 44,
        placeItems: "center",
        marginLeft: "auto",
        border: "1px solid rgba(255,255,255, 0.1)",
        borderRadius: 2,
        cursor: "pointer"
      }}
      cssLg={{ display: "none" }}
    >
      <RiMenu4Fill size={32} color="white" />
    </Button>
  );
}

NavbarToggleMenu.propTypes = {
  menuButton: any.isRequired,
  isMenuOpen: bool.isRequired,
  setIsMenuOpen: func.isRequired,
};
