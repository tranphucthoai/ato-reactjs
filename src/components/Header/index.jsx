import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    const dropDown = document.getElementsByClassName("js-dropdown");
    [...dropDown].forEach((ele) => {
      [...ele.getElementsByClassName("dropdown__btn")].forEach((eleBtn) => {
        eleBtn.onclick = () => {
          [...ele.getElementsByClassName("dropdown__menu")].forEach(
            (eleMenu) => {
              if (eleMenu.classList.contains("dropdown--show")) {
                eleMenu.classList.remove("dropdown--show");
              } else {
                eleMenu.classList.add("dropdown--show");
              }
            }
          );
        };
      });
    });

    const offcanvasMenu = document.getElementById("offcanvas-menu");
    const offcanvasShow = document.getElementById("offcanvas-show");
    const offcanvasHide = document.getElementById("offcanvas-hide");

    offcanvasShow.onclick = () => {
      offcanvasMenu.classList.add("active");
    };
    offcanvasHide.onclick = () => {
      offcanvasMenu.classList.remove("active");
    };
  });
  return (
    <header>
      <nav className="navbar">
        <div className="container-fullwidth">
          <Link to={"/"} className="navbar__brand" href="#">
            <img
              src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/Group%2019136.png?width=105&name=Group%2019136.png"
              alt=""
            />
          </Link>
          <div className="navbar__collapse hide-md">
            <ul className="nav">
              <li className="nav__item">
                <Link to={"/"} className="nav__link active">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/listing"} className="nav__link active">
                  BlogPost
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/single"} className="nav__link active">
                  Single
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/not-found"} className="nav__link active">
                  System Pages
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/"} className="nav__link active">
                  Contact
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/"} className="nav__link active">
                  Langding Page
                </Link>
              </li>
              <form className="d-flex">
                <div className="dropdown js-dropdown dropdown-search">
                  <div className="dropdown__btn">
                    <div className="search-btn btn-reset">
                      <i className="fa fa-search"></i>
                    </div>
                  </div>
                  <div className="dropdown__menu">
                    <div className="box-search">
                      <input
                        type="text"
                        placeholder="Search ..."
                        className="box-search__input form-control"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </ul>
          </div>
          <button
            className="navbar__toggler btn-reset show-md"
            type="button"
            id="offcanvas-show"
          >
            <i className="fa fa-bars"></i>
          </button>
          <form className="d-flex show-md search-form">
            <div className="dropdown js-dropdown dropdown-search">
              <div className="dropdown__btn">
                <div className="search-btn btn-reset">
                  <i className="fa fa-search"></i>
                </div>
              </div>
              <div className="dropdown__menu">
                <div className="box-search">
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="box-search__input form-control"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </nav>
      <div className="offcanvas offcanvas-menu" id="offcanvas-menu">
        <div className="offcanvas-header">
          <div className="offcanvas-brand">
            <img
              src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/Group%2019136.png?width=105&name=Group%2019136.png"
              alt=""
            />
          </div>
          <div className="social social-normal">
            <ul className="social-list">
              <li className="social-item">
                <Link to={"/"} className="social-link" href="">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="social-item">
                <Link to={"/"} className="social-link" href="">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li className="social-item">
                <Link to={"/"} className="social-link" href="">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="social-item">
                <Link to={"/"} className="social-link" href="">
                  <i className="fa fa-youtube-play"></i>
                </Link>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="offcanvas-close btn-reset"
            id="offcanvas-hide"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav nav-vertical">
            <li className="nav__item">
              <Link to={"/"} className="nav__link active">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/"} className="nav__link">
                BlogPost
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/"} className="nav__link">
                Single
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/"} className="nav__link">
                System Pages
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/"} className="nav__link">
                Contact
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/"} className="nav__link">
                Langding Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
