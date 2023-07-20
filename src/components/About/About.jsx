import React from "react";
import Awardwinning from "../Awardwinning/Awardwinning";
import LatestBlog from "../Latestblog/Latestblog";
import "./About.css";

import b1 from "../../assets/images/about-ny-b1.svg";
import b2 from "../../assets/images/about-ny-b2.svg";
import mail from '../../assets/images/mail-01.svg'
import aboutwhybanner from '../../assets/images/aboutwhy-banner.svg'

const About = () => {
  return (
    <>
      <section className="about-intro">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>
      <section className="about-newyork">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-ny-banner">
                <span className="about-ny-b1">
                  <img src={b1} alt="" />
                </span>
                <span className="about-ny-b2">
                  <img src={b2} alt="" />
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <h2>New York City Limousine and Car Service</h2>
              <p>
                We have been achieving our goals since more than 25 years ago.
                We keep providing our clients with excellent value thanks to the
                extensive industry experience of our employees and our
                competitive pricing. Our workforce is committed to providing the
                highest quality customer service. This entails being available
                to customers when they have questions, paying close attention to
                the little things, and offering knowledgeable guidance that
                enables clients to fulfil their transportation needs. Our
                drivers are courteous and educated, and all of our vehicles are
                more recent models. We now deal with over 10,000 travel agencies
                worldwide, many of them are Fortune 1000+ organisations and like
                our first-rate transportation offerings. Our basic objective has
                not changed. We are dedicated to staying current with the most
                innovative concepts in our industry and providing comprehensive
                solutions to our clients. Since we have the ideal combination of
                technology, expertise, and inventive employees, we are a leader
                in the chauffeured transportation sector.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-why">
        <div className="container">
          <h2>
            Why <span>Choose Us</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                We are a business committed to provide our customers the best
                ground transportation in the nation. We treat each reservation
                with the utmost professionalism. We’ll be prepared to transport
                you wherever enjoyable in the New York region when you’re ready.
                Among other things, we take our visitors to weddings, bachelor
                and bachelorette parties, athletic events, and unique NYC
                excursions. Be ready for the journey of your life by giving us a
                call right away.
              </p>
              <a href="#">
                <span>
                  <img src={mail} alt="" />
                </span>{" "}
                Book Now or Custom Query
              </a>
            </div>
            <div className="col-md-6">
                <div className="aboutwhy-banner">
                    <img src={aboutwhybanner} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-experience">
      <div className="container">
        <h2>IMPROVE YOUR <span>TRAVELING EXPERIENCE</span></h2>
        <p className="about-exp-post-head">
            Our Most Recent Resources & News Blogs Global Business Travel with Flexible Transportation Choices
        </p>
        <p>
        Premium Limo Nyc transports passengers in New York, New Jersey, Connecticut, and Pennsylvania on schedule. One of the top limo service companies in New York City and the tri-state region is called Premium Limo Nyc (Manhattan, Brooklyn, Queens, The Bronx, Staten Island, and Long Island). Affordably priced transportation is also available from and to all significant local airports, including John F. Kennedy, LaGuardia, Newark, Westchester, Teterboro, and Islip. Each of our more than 500 cars and drivers are licenced and insured, as are we. We can quickly reach our clients thanks to dispatching technology, and our online accounts make reservations and payments simple.
        </p>
      </div>
        
      </section>
      <Awardwinning />
      <LatestBlog />
    </>
  );
};

export default About;
