import React from 'react'
import './css/Footer.css'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <footer>
      <div className='footCont d-flex justify-content-around flex-sm-row flex-column'>

        <div id='InstAddr' className='d-flex flex-column py-3 FootAddr'>
          <h4 className='AddrHeading'>Institute Address</h4>
          <div className="footerTexts">
            <FaHome className='textIcons' size={20} />
            <div>
              MCKV Institute of Engineering 243 G. T. Road (North),Liluah, Howrah – 711204
            </div>
          </div>

          <div className="footerTexts">
            <FaPhoneAlt className='textIcons' size={20} />
            <div>
              +91 33 2654 9315 / 17<br />+91 33 2654 9318
            </div>
          </div>

          <div className="footerTexts">
            <MdEmail className='textIcons' size={20} />
            <div>
              principal@mckvie.edu.in / info@mckvie.edu.in
            </div>
          </div>
        </div>
        <hr />

        <div id='TrustOff' className='d-flex flex-column py-3 FootAddr'>
          <h4 className='AddrHeading'>Trust Office</h4>
          <div className="footerTexts">
            <FaHome className='textIcons' size={20} />
            <div>
              ‘Laxmi Niketan’ , 1st Floor 243, G. T. Road(North) Liluah, Howrah – 711 204.
            </div>
          </div>

          <div className="footerTexts">
            <FaPhoneAlt className='textIcons' size={20} />
            <div>
              00 91 33 26548604/05<br />00 91 33 2654 9318
            </div>
          </div>

          <div className="footerTexts">
            <MdEmail className='textIcons' size={20} />
            <div>
              principal@mckvie.edu.in
            </div>
          </div>

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