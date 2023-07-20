import React from "react";
import Awardwinning from '../Awardwinning/Awardwinning'
import LatestBlog from '../Latestblog/Latestblog'
import './Home.css'

import phone from '../../assets/images/phone.svg'
import mail from '../../assets/images/mail-01.svg'
import whitephone from '../../assets/images/whitephone.svg'
import chart from '../../assets/images/barchart.svg'
import group41 from '../../assets/images/Group-41.svg'
import group42 from '../../assets/images/Group-42.svg'
import group43 from '../../assets/images/Group-43.svg'
import group44 from '../../assets/images/Group-44.svg'
import group45 from '../../assets/images/Group-45.svg'
import group46 from '../../assets/images/Group-46.svg'


const Home = () => {
  return (
    <>
      <section className="home-intro">
        <div className="container">
          <h1>We Provide Luxury</h1>
          <p>Limo and Car Services in New York City, NY</p>
          <a href="#">
            <span>
              <img src={phone} alt="" />
            </span>{" "}
            Contact Us
          </a>
        </div>
      </section>
      <section className="home-about">
        <div className="container">
          <h2>BEST DISPATCH SERVICES</h2>
          <p>
            Searching for upscale transportation in New York City, NY? Come ride
            in luxury, then. We have you covered whether you need a transport to
            the airport, a special occasion, or for a night out. Our
            professional drivers will deliver you there on time. New York
            (Manhattan, Brooklyn, Queens, The Bronx, Staten Island, and Long
            Island), New Jersey, Connecticut, and Pennsylvania all provide limo
            service. One of the most recognised businesses in the region is
            ours. The airports of JFK, LGA, EWR, HPN, ISP, SWF, BDL, and PHL are
            all accessible to us for pick-up and drop-off services.
          </p>
        </div>
        <div className="home-about-btns">
          <a href="#">
            <span>
              <img src={mail} alt="" />
            </span>{" "}
            Book Now or Custom Query
          </a>
          <a href="#">
            <span>
              <img src={whitephone} alt="" />
            </span>{" "}
            +1 (718) 710-9195
          </a>
        </div>
      </section>
      <section className="home-piechart">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="barchart">
                <img src={chart} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <span>
                    <img src={group41} alt="" />
                  </span>{" "}
                  Competitive Prices
                </li>
                <li>
                  <span>
                    <img src={group42} alt="" />
                  </span>{" "}
                  Quality Vehicles
                </li>
                <li>
                  <span>
                    <img src={group43} alt="" />
                  </span>{" "}
                  Win Award
                </li>
                <li>
                  <span>
                    <img src={group44} alt="" />
                  </span>{" "}
                  Win Award
                </li>
                <li>
                  <span>
                    <img src={group45} alt="" />
                  </span>{" "}
                  Secure
                </li>
                <li>
                  <span>
                    <img src={group46} alt="" />
                  </span>{" "}
                  24/7 Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="container">
          <h2>
            Our <span>Services</span>
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Wedding Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Corporate Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Point to Point Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Prom Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Airport Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Private Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Night Tour Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Party Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-header">
                  <span>
                    <img src={group41} alt="" />
                  </span>
                  <h3>Car & Chauffeur Service</h3>
                </div>
                <p>
                  In New York City, we provide the greatest wedding limousine
                  service, as well as luxury automobiles, party buses, and car
                  rentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Awardwinning />
      <LatestBlog />
    </>
  );
};

export default Home;
