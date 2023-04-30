import React from 'react'
import './css/Footer.css'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

const Footer = () => {
  return (
    <footer>
      <div className='footCont d-flex justify-content-around flex-sm-row flex-column'>

        <div id='InstAddr' className='py-3 FootAddr'>
          <h4 className='AddrHeading'>Institute Address</h4>
          <p><FaHome size={20} /> &ensp;MCKV Institute of Engineering<br /> &emsp;&emsp;243 G. T. Road (North),Liluah, Howrah – 711204</p><br />

          <p><FaPhoneAlt size={20} /> &ensp;+91 33 2654 9315 / 17<br /> &emsp;&emsp;+91 33 2654 9318</p><br />

          <p className='mb-0'><MdEmail size={20} /> &ensp;principal@mckvie.edu.in / info@mckvie.edu.in</p>
        </div>
        <hr/>

        <div id='TrustOff' className='py-3 FootAddr'>
          <h4 className='AddrHeading'>Trust Office</h4>
          <p><FaHome size={20} /> &ensp;‘Laxmi Niketan’<br /> &emsp;&emsp;1st Floor 243, G. T. Road(North) Liluah, Howrah – 711 204</p><br />

          <p><FaPhoneAlt size={20} /> &ensp;00 91 33 26548604/05<br /> &emsp;&emsp;00 91 33 2654 9318</p><br />

          <p className='mb-0'><MdEmail size={20} /> &ensp;principal@mckvie.edu.in</p>
        </div>

      </div>

      <div className='SocialIcoDiv d-flex justify-content-center'>
        <div>
          <IconContext.Provider value={{ size: '27px', color: 'white' }}>

            <a href="https://www.facebook.com/mckvieoriginal/" target='_blank'> <FaFacebook className='SocialIco' /></a> &nbsp;<a href='https://instagram.com/mckvieofficial?igshid=YmMyMTA2M2Y=' target='_blank'> <FaInstagramSquare className='SocialIco' /></a> &nbsp;<a href='https://www.linkedin.com/company/mckvie/' target='_blank'> <FaLinkedin className='SocialIco' /></a> &nbsp;<a href='https://www.youtube.com/@mckvinstituteofengineering2684/featured' target='_blank'> <FaYoutube className='SocialIco' size={34} /></a>

          </IconContext.Provider>
        </div>
      </div>

      <div className='Copyright text-center'>
        &copy; 2023 Copyright: All Copyright Reserved to USBN
      </div>
    </footer>
  )
}

export default Footer