import { useState, useRef, useEffect, memo } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../../../../styles/MameStyled/core/components/navbar/Navbar"));
const NavbarBrand = dynamic(() => import("../../../../../styles/MameStyled/core/components/navbar/NavbarBrand"));
const NavbarToggleMenu = dynamic(() => import("../../../../../styles/MameStyled/core/components/navbar/NavbarToggleMenu"));
const NavbarNav = dynamic(() => import("../../../../../styles/MameStyled/core/components/navbar/NavbarNav"));
const NavbarContentWrapper = dynamic(() => import("../../../../../styles/MameStyled/core/components/navbar/NavbarContentWrapper"));
const NavLink = dynamic(() => import("../../../../../styles/MameStyled/core/components/navbar/NavbarLink"));
const Flex = dynamic(() => 
  import("../../../../../styles/MameStyled/core/display/Flex").then(mod => mod.Flex),
);

const MameNavbar = memo(function MameComponent() {
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
});

export default MameNavbar;
