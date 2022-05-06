// import dynamic from "next/dynamic";

// const CodePreview = dynamic(() => import("../../../organisms/CodePreview"));
import CodePreview from "../../../organisms/CodePreview";

export default function ResultCodePreview() {
  return <>
    <CodePreview title="Result Code Preview" member="Navbar">
      {`
        import { useState, useRef, useEffect } from "react";
        import { Flex } from "../../../../../styles/MameStyled/core/display/Flex";
        import Navbar from "../../../../../styles/MameStyled/core/components/navbar/Navbar";
        import NavbarBrand from "../../../../../styles/MameStyled/core/components/navbar/NavbarBrand";
        import NavbarToggleMenu from "../../../../../styles/MameStyled/core/components/navbar/NavbarToggleMenu";
        import NavbarNav from "../../../../../styles/MameStyled/core/components/navbar/NavbarNav";
        import NavbarContentWrapper from "../../../../../styles/MameStyled/core/components/navbar/NavbarContentWrapper";
        import NavLink from "../../../../../styles/MameStyled/core/components/navbar/NavbarLink";
        
        export default function Appbar() {
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
          });
        
          return (
            <Navbar navbar={navbar}> 
              <NavbarContentWrapper> 
                <Flex vCenter>
                  <NavbarBrand 
                    src="/images/logo/mame.svg"
                    alt="MAME"
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
      `}
    </CodePreview>
  </>;
}
