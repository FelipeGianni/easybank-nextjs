import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer container container--px">
      <div className="footer__first">
        <div className="logo">
          <a href="/" className="logo">
            <img src="./images/logo-dark.svg" alt="Logo" />
          </a>
        </div>

        <div className="icon">
          <a href="#">
            <img src="./images/icon-facebook.svg" alt="Facebook" />
          </a>

          <a href="#">
            <img src="./images/icon-youtube.svg" alt="Youtube" />
          </a>

          <a href="#">
            <img src="./images/icon-twitter.svg" alt="Twitter" />
          </a>

          <a href="#">
            <img src="./images/icon-pinterest.svg" alt="pinterest" />
          </a>

          <a href="#">
            <img src="./images/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="footer__link1">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>

      <div className="footer__link2">
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
      </div>

      <div className="footer__final">
        <a href="#" className="button">
          Request Invite
        </a>
        <p className="copyright">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
