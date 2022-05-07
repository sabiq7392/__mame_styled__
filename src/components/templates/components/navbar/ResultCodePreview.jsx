// import dynamic from "next/dynamic";

// const CodePreview = dynamic(() => import("../../../organisms/CodePreview"));
import CodePreview from "../../../organisms/CodePreview";

export default function ResultCodePreview() {
  return <>
    <CodePreview title="Result Code Preview" member="Navbar">
      {`
        import { useState, useRef, memo } from "react";
        import Navbar from "../../../../../styles/MameStyled/core/components/navbar/Navbar";
        import NavbarBrand from "../../../../../styles/MameStyled/core/components/navbar/NavbarBrand";
        import NavbarToggleMenu from "../../../../../styles/MameStyled/core/components/navbar/NavbarToggleMenu";
        import NavbarNav from "../../../../../styles/MameStyled/core/components/navbar/NavbarNav";
        import NavbarContentWrapper from "../../../../../styles/MameStyled/core/components/navbar/NavbarContentWrapper";
        import NavLink from "../../../../../styles/MameStyled/core/components/navbar/NavbarLink";
        import { Flex } from "../../../../../styles/MameStyled/core/display/Flex";
        
        const MameNavbar = memo(function MameNavbar() {
          const [isMenuOpen, setIsMenuOpen] = useState(false); 
          const navbar = useRef();
        
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
                    isMenuOpen={isMenuOpen} 
                    setIsMenuOpen={setIsMenuOpen} 
                  />
                </Flex>
        
                <NavbarNav isMenuOpen={isMenuOpen} refNavbar={navbar}>
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
      `}
    </CodePreview>
  </>;
}
