import React from "react";
import './Footer.css';
import logo from '../../assets/images/logo.svg'
import Group3 from '../../assets/images/Group-3.svg'
import Group4 from '../../assets/images/Group-4.svg'
import Group5 from '../../assets/images/Group-5.svg'
import Group6 from '../../assets/images/Group-6.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <div className="social-link">
              <ul>
                <li>
                  <a href="#">
                    <img src={Group3} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Group4} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Group5} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Group6} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="">New York Services</a>
              </li>
              <li>
                <a href="">Tour Services</a>
              </li>
              <li>
                <a href="">Lemo Services</a>
              </li>
              <li>
                <a href="">Car Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>Explore Us</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Reservations</a>
              </li>
              <li>
                <a href="">Fleet</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="">Terms & Condition</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
