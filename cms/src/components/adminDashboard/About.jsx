import React from 'react';
import Head from '../Head';

import NavScrollExample from '../Navbar';
import '../css/About.css';
import Footer2 from '../Footer2'
import Slider from '../Slider';



const About = () => {
  return (
    <>
      <Head />
      <NavScrollExample />
      <Slider />

      {/* <div className='pic'><img width="950" height="500"src="http://www.mckvie.edu.in/wp-content/uploads/2021/05/college_building.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="http://www.mckvie.edu.in/wp-content/uploads/2021/05/college_building.jpg 750w, http://www.mckvie.edu.in/wp-content/uploads/2021/05/college_building-300x144.jpg 300w" sizes="(max-width: 750px) 100vw, 750px"></img></div>  */}

      <div className='aboutus mt-2'>
        <h1>About Us</h1>
      </div>
      <div className='abt'>
        <h4>
          MCKV Institute of Engineering is one of the top engineering colleges in West Bengal. It was established more than two decades ago, in 1999, with a vision to foster the spirit of technological learning and its application. Since its very first year of birth, the institution has been creating the right kind of opportunities and ambience for educating young minds in the digital era. MCKV Institute of Engineering has been accredited by NAAC with an ‘A’ Grade, and is currently an autonomous Engineering college affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT), in West Bengal. The institution has been approved by the All India Council for Technical Education (AICTE). It offers core and applied engineering programmes in Mechanical Engineering, Electrical Engineering, Computer Science Engineering, Electronics and Communication Engineering, Information Technology, and last but not the least, in the very niche stream of Automobile Engineering. Quite a few of these courses have the accreditation from NBA. Apart from the B.Tech. courses, an M.Tech course in Electronics and Communication Engineering (with specialization in Communication) has been offered for ten years to encourage students in higher studies.

          Gaining confidence from its illustrious track record, and with the support of the freedom offered through the autonomous status, MCKVIE has recently launched three new B.Tech courses in CSE (Data Science), ECE (VLSI Design), and Artificial Intelligence & Machine Learning (AI&ML), along with a PG course in the field of Management (MBA in Business Analytics). The curricula of all these courses have been designed to accommodate the trending needs of the industries.

          MCKV Institute of Engineering is firmly committed to provide quality education to its students, so that they can cater to the diversified needs of the industries. The institution also encourages its students to engage in research work. Some of its students are currently pursuing higher studies from the best IITs in the country. Some others are doing the same in various European nations, and in the United States of America. The institution offers state-of-the-art infrastructure, industry-academia collaborations, experienced senior faculty, and rigorous hands-on training sessions. These transform students into industry-ready professionals. For more than 20 years, MCKV Institute of Engineering has been known for a spirit of excellence that transforms students into intellectuals. It has evolved as an institution in which teachers work with students to engineer solutions and encourage exploration across disciplines. Critical thinking and networking have been the two main areas of focus for the institution – on campus, off campus, and after graduation.
        </h4>
      </div>
      <Footer2 />
    </>
  )
}

export default About