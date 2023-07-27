import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./LatestBlog.css";

import slide1 from "../../assets/images/slider-1.svg";
import slide2 from "../../assets/images/slide-2.svg";

const Latestblog = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="home-blog">
      <div className="container">
        <h2>Our Latest Blogs & News</h2>
        <p>Limo and Car Company in New York City, NY</p>
        <Carousel responsive={responsive} showDots={true} arrows={false} autoPlay={true} infinite={true} autoPlaySpeed={3000}>
          <div>
            <div className="slide-img">
              <img src={slide1} alt="" />
            </div>
            <h3>A Full Guide to JFK Airport – To and From NYC Car Service</h3>
            <p>
              The main point of entry for foreign tourists into New York City is
              John F. Kennedy International Airport (JFK), usually known as JFK
              Airport.
            </p>
          </div>
          <div>
            <div className="slide-img">
              <img src={slide2} alt="" />
            </div>
            <h3>A Full Guide to JFK Airport – To and From NYC Car Service</h3>
            <p>
              The main point of entry for foreign tourists into New York City is
              John F. Kennedy International Airport (JFK), usually known as JFK
              Airport.
            </p>
          </div>
          <div>
            <div className="slide-img">
              <img src={slide1} alt="" />
            </div>
            <h3>A Full Guide to JFK Airport – To and From NYC Car Service</h3>
            <p>
              The main point of entry for foreign tourists into New York City is
              John F. Kennedy International Airport (JFK), usually known as JFK
              Airport.
            </p>
          </div>
          <div>
            <div className="slide-img">
              <img src={slide2} alt="" />
            </div>
            <h3>A Full Guide to JFK Airport – To and From NYC Car Service</h3>
            <p>
              The main point of entry for foreign tourists into New York City is
              John F. Kennedy International Airport (JFK), usually known as JFK
              Airport.
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Latestblog;
