import React, {useState} from "react";
import "../Services/Services.css";
import Awardwinning from "../Awardwinning/Awardwinning";
import LatestBlog from "../Latestblog/Latestblog";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Modal, Button } from 'react-bootstrap'


import whitephone from "../../assets/images/whitephone.svg";
import servicebanner from "../../assets/images/servicebanner.svg";
import servicetileimg from "../../assets/images/service-tile-img.svg";

const Carlemoservice = () => {
  const [isShow, invokeModal] = useState(false)
  const [modalhead, setmodalhead] = useState('')
  const [modaldesc, setmodaldesc] = useState('')
  const [modalimg, setmodalimg] = useState()
  const initModal = () => {
    return invokeModal(!false)
  }
  const handleClick = (event) => {
    console.log(event.target.parentElement.parentElement.parentElement.children[0].children[0].src)
    setmodalimg(event.target.parentElement.parentElement.parentElement.children[0].children[0].src)
    setmodalhead(event.target.parentElement.parentElement.children[0].children[0].innerHTML)
    setmodaldesc(event.target.parentElement.parentElement.children[0].children[1].innerHTML)
    event.target.addEventListener('click', e => {
        e.target.classList.toggle('example');
    });
    initModal();
  }
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
              <div className="service-tile" >
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
                    <button className="more-info-btn" onClick={handleClick}>More Information</button>
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
      {/* <section className="services-carousel">
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
      </section> */}
      <Awardwinning />
      <LatestBlog />

      <Modal show={isShow}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton onClick={()=>invokeModal(!isShow)}>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-md-6">
          <h1>{modalhead}</h1>
          <h3>Desciption:</h3>
          <p>{modaldesc}</p>
          </div>
          <div className="col-md-6">
            <img src={modalimg} alt="" />
          </div>
        </div>
          
          
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Carlemoservice