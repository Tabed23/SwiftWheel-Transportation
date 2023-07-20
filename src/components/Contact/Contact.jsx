import React from 'react'
import Awardwinning from '../Awardwinning/Awardwinning'
import LatestBlog from '../Latestblog/Latestblog'
import './Contact.css';

import group53 from '../../assets/images/Group-53.svg'
import group54 from '../../assets/images/Group-54.svg'
import group55 from '../../assets/images/Group-55.svg'
const Contact = () => {
  return (
    <>
      <section className="contact-intro">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
        <div className="row">
           <div className="col-md-6">
              <h2 className='form-head'>Need Help?</h2>
              <p>Reach out to the world’s most reliable IT services.</p>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name" id="name" placeholder='Name'/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" id="email" placeholder='E-mail'/>
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="number" id="number" placeholder='Phone Number'/>
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Write message'></textarea>
                  </div>
                </div>
                <a href="#">Submit</a>
              </form>
            </div>
            <div className="col-md-6">
              <h2 className='contact-address'>Contacts & Address</h2>
              <ul>
                <li><span><img src={group53} alt="" /></span>+1 (718) 710-9195</li>
                <li><span><img src={group54} alt="" /></span>info@premiumlimonyc.com</li>
                <li><span><img src={group55} alt="" /></span>199-04 Hillside Avenue, Queens, NY 11423, United States</li>
              </ul>
            </div>
        </div>
         
        </div>
      </section>
        <Awardwinning />
        <LatestBlog />
    </>
  )
}

export default Contact