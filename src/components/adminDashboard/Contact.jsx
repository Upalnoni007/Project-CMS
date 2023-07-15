import React from 'react'
import Head from '../Head'
import '../css/Contact.css'

import NavScrollExample from '../Navbar'
import Footer from '../Footer'

export default function Contact() {
  return (
    <>
      <Head />
      <NavScrollExample />
      <div className='map'>
      <iframe className='frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9153242517027!2d88.34550845047504!3d22.6196369850857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681053638249!5m2!1sen!2sin" width="90%" height="650" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    
      <div className='institute'><h3>Institute Address</h3></div>
      <div id="menu"><i class="fa-solid fa-house"></i><span>MCKV Institute of Engineering 243 G. T. Road (North),Liluah, Howrah – 711204</span></div>
      <div id="menu"><i class="fa-solid fa-phone"></i> +91 33 2654 9315 / 17</div>
      <div id="menu"><i class="fa-solid fa-phone-volume"></i> +91 33 2654 9318</div>
      <div id="menu"><i class="fa-solid fa-envelope"></i>principal@mckvie.edu.in / info@mckvie.edu.in</div>
     
      <div className='trust'><h3>Trust Office</h3></div>
      <div id="menu1"><i class="fa-solid fa-house"></i><span>‘Laxmi Niketan’ , 1st Floor 243, G. T. Road(North) Liluah, Howrah – 711 204.</span></div>
      <div id="menu1"><i class="fa-solid fa-phone"></i>00 91 33 26548604/05</div>
      <div id="menu1"><i class="fa-solid fa-phone-volume"></i> 00 91 33 2654 9318</div>
      <div id="menu1"><i class="fa-solid fa-envelope"></i>principal@mckvie.edu.in</div>

      <Footer />
    </>
  )
}
