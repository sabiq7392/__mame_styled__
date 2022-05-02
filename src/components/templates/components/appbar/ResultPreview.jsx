import Preview from "../../../organisms/Preview";
import { Flex } from "../../../../../styles/MameStyled/core/display/Flex";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../../../styles/MameStyled/core/components/navbar/Navbar";
import NavbarContentWrapper from "../../../../../styles/MameStyled/core/components/navbar/NavbarContentWrapper";
import NavbarBrand from "../../../../../styles/MameStyled/core/components/navbar/NavbarBrand";
import NavbarToggleMenu from "../../../../../styles/MameStyled/core/components/navbar/NavbarToggleMenu";
import NavLink from "../../../../../styles/MameStyled/core/components/navbar/NavbarLink";
import NavbarNav from "../../../../../styles/MameStyled/core/components/navbar/NavbarNav";

export default function ResultPreview() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const menuButton = useRef();
  const navbar = useRef();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const navbarHeight = entries[0].target.offsetHeight;

      return setNavbarHeight(navbarHeight);
    });

    observer.observe(navbar.current);
  });

  return <>
    <Preview member="Appbar" noLandfield>
      <Navbar navbar={navbar}>
        <NavbarContentWrapper>
          <Flex vCenter>
            <NavbarBrand  />
            <NavbarToggleMenu menuButton={menuButton} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Flex>

          <NavbarNav navbarHeight={navbarHeight} isMenuOpen={isMenuOpen}>
            <NavLink title="Home" href="#home" />
            <NavLink title="About" href="#about" />
            <NavLink title="Contact" href="#contact" />
            <NavLink title="News" href="#news" />
          </NavbarNav>
        </NavbarContentWrapper>
      </Navbar>
    </Preview>
  </>
}




