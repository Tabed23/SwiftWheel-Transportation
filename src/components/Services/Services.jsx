import React from "react";
import "./Services.css";
import Awardwinning from "../Awardwinning/Awardwinning";
import LatestBlog from "../Latestblog/Latestblog";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import whitephone from "../../assets/images/whitephone.svg";
import servicebanner from "../../assets/images/servicebanner.svg";
import servicetileimg from "../../assets/images/service-tile-img.svg";

const Services = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <>
      <section className="services-intro">
        <div className="container">
          <h1>Services</h1>
        </div>
      </section>
      <section className="services-why">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>OUR TRANSPORTATION Services</h2>
              <p className="svs-why-post-header">
                Book a limousine or take an airport transfer in New York City.
                All of Your Transportation Requirements are Met
              </p>
              <p>
                Each of our more than 500 cars and drivers are licensed and
                insured, as are we. We can quickly reach our clients thanks to
                dispatching technology, and our online accounts make
                reservations and payments simple.
              </p>
              <a href="#">
                <span>
                  <img src={whitephone} alt="" />
                </span>
                +1 (718) 710-9195
              </a>
            </div>
            <div className="col-md-6">
              <div className="aboutwhy-banner">
                <img src={servicebanner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="core-services">
        <div className="container">
          <h2>
            Our <span>Core Services</span>
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-carousel">
        <div className="container">
          <Carousel
            responsive={responsive}
            showDots={false}
            arrows={true}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
          >
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-tile">
                <div className="service-tile-img">
                  <img src={servicetileimg} alt="" />
                </div>
                <div className="service-tile-grey-part">
                  <div className="hidden-part">
                    <h3>Wedding Limousine Service</h3>
                    <p>
                      In New York City, we provide the greatest wedding
                      limousine service, as well as luxury automobiles, party
                      buses, and car rentals.
                    </p>
                  </div>
                  <div className="service-tile-btns">
                    <button className="more-info-btn">More Information</button>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
                <div className="shown-part">
                  <h3>Wedding Limousine Service</h3>
                  <p>
                    In New York City, we provide the greatest wedding limousine
                    service, as well as luxury automobiles, party buses, and car
                    rentals.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <Awardwinning />
      <LatestBlog />
    </>
  );
};

export default Services;
