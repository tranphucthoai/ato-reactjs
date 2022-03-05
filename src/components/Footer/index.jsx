import React from "react";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer__logo">
          <a className="logo-footer" href="/">
            <img
              alt=""
              src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/logo-white-2.png?width=108&name=logo-white-2.png"
            />
          </a>
        </div>
        <div className="footer__nav">
          <ul className="nav-footer-list">
            <li className="nav-footer-item">
              <a href="/" className="nav-footer__link">
                DOCUMENTATION
              </a>
            </li>
            <li className="nav-footer-item">
              <a href="/" className="nav-footer__link">
                BUY THEME
              </a>
            </li>
            <li className="nav-footer-item">
              <a href="/" className="nav-footer__link">
                MORE THEMES
              </a>
            </li>
            <li className="nav-footer-item">
              <a href="/" className="nav-footer__link">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <ul className="social-list">
            <li className="social-item">
              <a href="/" className="social__link">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="social-item">
              <a href="/" className="social__link">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="social-item">
              <a href="/" className="social__link">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
