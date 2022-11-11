import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import ehLogo from "../../images/eh_logo.png";

import {
  NavbarContainer,
  NavLogo,
  Nav,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavImg,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavImg src={ehLogo} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            {console.log(scrollNav)}

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                  scrollNav={scrollNav}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                  scrollNav={scrollNav}
                >
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-200}
                  scrollNav={scrollNav}
                >
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
