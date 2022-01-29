import { useWindowSize } from "hooks";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "styles/theme";
import { Container, Logo, Menu, MenuItems, NavBar, Overlay } from "./styles";

const HeaderMobile: React.FC = () => {
  const { width } = useWindowSize();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      {width < theme.breakpoints.xlNum && (
        <Container>
          <NavBar>
            <Logo href="#">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width="140px"
                height="20px"
              />
            </Logo>

            <Menu
              aria-label="menu button"
              isMenuOpen={showMenu}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span />
              <span />
              <span />
            </Menu>
          </NavBar>

          {showMenu && (
            <>
              <Overlay />
              <MenuItems>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </MenuItems>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default HeaderMobile;
