import React, {useState} from "react";
import Awardwinning from "../Awardwinning/Awardwinning";
import LatestBlog from "../Latestblog/Latestblog";
import "react-multi-carousel/lib/styles.css";

import "./Inboundservices.css";
import checkicon from '../../assets/images/checked.png'
import servicebanner from "../../assets/images/servicebanner.svg";


const InboundService = () => {
    
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
            <h2>Cabs and Limousines Dispatch Services</h2>
            {/* <p className="svs-why-post-header">
              Book a limousine or take an airport transfer in New York City.
              All of Your Transportation Requirements are Met
            </p> */}
            <p>
            BM Cabs and Limousines Dispatch Services maintain a full staff of dispatchers 24 hours per day, 7 days per week. Each shift is led by the Shift Dispatch Supervisor. This individual directs their team in the various aspects of the shift. Their primary responsibility is to ensure that the correct vehicle is on location 15 minutes prior to the expected time of pick up. Our Dispatch Center also controls the arrival of all chauffeurs and coach drivers, 45 minutes prior to their first pickup. Our Dispatch Center is also mandated to be in constant communication with our chauffeurs and coach drivers via cellular phones. Chauffeurs report any delays, immediately, so that alternative actions can be initiated, if necessary. At each day’s end, all arrival and departure times are analyzed to confirm compliance to our customer’s needs. 
            </p>
            <p>
            In working with our corporate and academic partners, we implement the same type of procedures with a few exceptions. 
            </p>
           
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
       <h4 className="servicesHeader">We have a team of specialists that work with each client—</h4>
       <div className="row">
        <div className="col-lg-6">
            <ul>
                <li>To assess their specific needs</li>
                <li>Review their schedules</li>
                <li>Provide pricing by request</li>
                <li>Make reservations</li>
            </ul>
        </div>
        <div className="col-lg-6">
            <ul>
                <li>Attach special instructions to the driver sheets where needed</li>
                <li>E-mail confirmations</li>
                <li>Generate invoices for affiliates and vendors</li>
            </ul>
        </div>
       </div>
       <h4 className="servicesHeader">BM Cabs and Limousines Dispatch Services offer followings to its valuable clients:</h4>
       <div className="row">
        <div className="col-lg-6">
            <ul>
                <li>All dispatch services under one roof (Cab, Limos, Shuttles and Trucks)</li>
                <li>14 days free trial period</li>
                <li>Cost reduction up to 70%</li>
                <li>Ability to handle over 30,000 calls in a single shift of 8 hours</li>
                <li>Dedicated resources (dispatcher and rooms)</li>
                <li>Reducing customers’ churn rate</li>
                <li>Efficient monitoring and tracking skills</li>
            </ul>
        </div>
        <div className="col-lg-6">
            <ul>
                <li>Ability to expand operations</li>
                <li>Multi-layered back up to ensure your business continuity</li>
                <li>Extreme measures over data protection</li>
                <li>Strict call quality compliance to deliver seamless services to your customers</li>
                <li>Dedicated corporate account manager to respond you 24/7</li>
                <li>Providing in-house built dispatch software to help you save up to 50% cost</li>
            </ul>
        </div>
                <a href="#">
                
                    Get A Qoutation
              </a>
       </div>
      </div>
    </section>
    
    <Awardwinning />
    <LatestBlog />
  </>
  )
}

export default InboundService