import { theme } from "styles/theme";
import { useWindowSize } from "hooks";
import React from "react";

const HeaderMobile: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width < theme.breakpoints.xlNum && (
        <header className="header">
          <div className="overlay fade"></div>

          <nav className="container container--pall flex flex-jc-sb flex-ai-c">
            <a href="/" className="header__logo">
              <img src="./images/logo.svg" alt="Easybank" />
            </a>

            <a
              href="#"
              id="btnHamburguer"
              className="header__toggle hide_for_desktop"
            >
              <span></span>
              <span></span>
              <span></span>
            </a>

            <div className="header__links hide_for_mobile">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>

            <a href="#" className="button hide_for_mobile">
              Request Invite
            </a>
          </nav>
        </header>
      )}
    </>
  );
};

export default HeaderMobile;
