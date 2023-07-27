import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  ABOUT US
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/services"}>
                  SERVICES
                </Link>
              </li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to={"/services"}>
                      Service Profile
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/carlemoservice"}>
                      Car & Lemo Service
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/reservation"}>
                  RESERVATION
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/faq"}>
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/fleet"}>
                  FLEET
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/blog"}>
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
