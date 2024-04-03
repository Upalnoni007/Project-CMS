import React from 'react'
import Head from '../Head'
import '../css/Contact.css'

import NavScrollExample from '../Navbar'
import Footer from '../Footer'

export default function Contact() {
  return (
    <div className="ContactDiv d-flex flex-column">
      <Head />
      <NavScrollExample />
      <div className='map'>
        <iframe className='frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9153242517027!2d88.34550845047504!3d22.6196369850857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681053638249!5m2!1sen!2sin" width="90%" height="650" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      {/* main contact page */}



      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>

          {/* Contact form Content */}
          <section className="section-form">
          <form>
            <div>
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              name="username" 
              id="username" 
              autoComplete="off" 
              required/>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input 
              type="email" 
              name="email" 
              id="email" 
              autoComplete="off" 
              required/>
            </div>
            <label htmlFor="message">Message</label>
            <div>
              <textarea 
              name="message"
              id="message"
              cols="30"
              rows="5"
              autoComplete="off" 
              required
              ></textarea>
            </div>

            <div className="button07">
              <button  type="submit">Submit</button>
            </div>
          </form>

          </section>


        </div>
      </section>

      <Footer />
    </div>
  )
}