import React from "react";
import { Link } from "react-router-dom";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer__logo">
          <Link className="logo-footer" to={"/"}>
            <img
              alt=""
              src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/logo-white-2.png?width=108&name=logo-white-2.png"
            />
          </Link>
        </div>
        <div className="footer__nav">
          <ul className="nav-footer-list">
            <li className="nav-footer-item">
              <Link to={"/"} className="nav-footer__link">
                HOME
              </Link>
            </li>
            <li className="nav-footer-item">
              <Link to={"/listing"} className="nav-footer__link">
                POSTS
              </Link>
            </li>
            <li className="nav-footer-item">
              <Link to={"/single"} className="nav-footer__link">
                SINGLE
              </Link>
            </li>
            <li className="nav-footer-item">
              <Link to={"not-found"} className="nav-footer__link">
                NOTFOUND
              </Link>
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
