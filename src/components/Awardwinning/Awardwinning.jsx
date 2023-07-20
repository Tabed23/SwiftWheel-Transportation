import React from 'react'
import mail from '../../assets/images/mail-01.svg'

const Awardwinning = () => {
  return (
    <section className="home-award">
      <div className="container">
        <h2>We're an Award-Winning</h2>
        <p>Limo and Car Company in New York City, NY</p>
        <div className="booknow">
          <p>The Leading Transportation Company in New York City Provides a Complete Wide range of Transportation Services.</p>
          <p>Premium Limo Nyc offers top-notch luxury transportation at an affordable price. Whether you are travelling for business or pleasure, you may arrive or depart in style with the help of a NYC Premium limo service. For an airport transfer or a personalised tour of New York, New Jersey, Connecticut, or Pennsylvania, New York Car and Limo service is available. For normal work travel, unforgettable nights out, sightseeing, and airport transfer, our limo service in NYC is the most practical choice. You will be driven to your location in safety, efficiency, and luxury by one of our limo drivers.
          </p>
          <a href="#"><span><img src={mail} alt="" /></span> Book Now or Custom Query</a>
        </div>
      </div>
    </section>
  )
}

export default Awardwinning