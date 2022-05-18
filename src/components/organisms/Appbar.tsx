// import { useState, useRef, useEffect } from "react";
// import Navbar from "../../../styles/MameStyled/core/components/navbar/Navbar";
// import NavbarContentWrapper from "../../../styles/MameStyled/core/components/navbar/NavbarContentWrapper";
// import NavbarNav from "../../../styles/MameStyled/core/components/navbar/NavbarNav";
// import NavbarBrand from "../../../styles/MameStyled/core/components/navbar/NavbarBrand";
// import NavbarToggleMenu from "../../../styles/MameStyled/core/components/navbar/NavbarToggleMenu";
// import NavLink from "../../../styles/MameStyled/core/components/navbar/NavbarLink";
// import { Flex } from "../../../styles/MameStyled/core/display/Flex";
// import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";

// export default function Appbar({ ...props }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const menuButton = useRef();
//   const navbar = useRef();

//   useEffect(() => {
//     const observer = new ResizeObserver((entries) => {
//       const navbarHeight = entries[0].target.offsetHeight;

//       return setNavbarHeight(navbarHeight);
//     });

//     observer.observe(navbar.current);
//   });

//   return (
//     <ErrorUnexpectedProps props={props} component="Appbar">
//       <Navbar navbar={navbar}> 
//         <NavbarContentWrapper> 
//           <Flex vCenter>
//             <NavbarBrand 
//               src="/images/logo/mame.svg"
//               alt="MAME"
//             />
//             <NavbarToggleMenu 
//               menuButton={menuButton} 
//               isMenuOpen={isMenuOpen} 
//               setIsMenuOpen={setIsMenuOpen} 
//             />
//           </Flex>

//           <NavbarNav navbarHeight={navbarHeight} isMenuOpen={isMenuOpen}>
//             <NavLink title="Home" href="#home" />
//             <NavLink title="About" href="#about" />
//             <NavLink title="Contact" href="#contact" />
//             <NavLink title="News" href="#news" />
//           </NavbarNav>
//         </NavbarContentWrapper>
//       </Navbar>
//     </ErrorUnexpectedProps>
//   );
// }
