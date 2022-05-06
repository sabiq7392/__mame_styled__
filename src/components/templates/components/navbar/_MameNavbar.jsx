import { useState, useRef, useEffect } from "react";
import Navbar from "../../../../../styles/MameStyled/core/components/navbar/Navbar";
import NavbarBrand from "../../../../../styles/MameStyled/core/components/navbar/NavbarBrand";
import NavbarToggleMenu from "../../../../../styles/MameStyled/core/components/navbar/NavbarToggleMenu";
import NavbarNav from "../../../../../styles/MameStyled/core/components/navbar/NavbarNav";
import NavbarContentWrapper from "../../../../../styles/MameStyled/core/components/navbar/NavbarContentWrapper";
import NavLink from "../../../../../styles/MameStyled/core/components/navbar/NavbarLink";
import { Flex } from "../../../../../styles/MameStyled/core/display/Flex";

export default function MameNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [navbarHeight, setNavbarHeight] = useState(0);
  const menuButton = useRef();
  const navbar = useRef();

  const getNavbarHeight = () => {
    const observer = new ResizeObserver((entries) => {
      const navbarHeight = entries[0].target.offsetHeight;

      return setNavbarHeight(navbarHeight);
    });

    observer.observe(navbar.current);
  };

  useEffect(() => {
    getNavbarHeight();
  }, []);

  return (
    <Navbar _ref={navbar}> 
      <NavbarContentWrapper> 
        <Flex vCenter>
          <NavbarBrand 
            src="/images/logo/mame.svg"
            alt="MAME"
            width={146}
            height={36}
          />
          <NavbarToggleMenu 
            menuButton={menuButton} 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
        </Flex>

        <NavbarNav navbarHeight={navbarHeight} isMenuOpen={isMenuOpen}>
          <NavLink title="Home" href="#home" />
          <NavLink title="About" href="#about" />
          <NavLink title="Contact" href="#contact" />
          <NavLink title="News" href="#news" />
        </NavbarNav>
      </NavbarContentWrapper>
    </Navbar>
  );
}
