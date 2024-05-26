// import React, { useState } from 'react';
// import Head from '../Head';
// import '../css/Contact.css';
// import axios from 'axios';
// import NavScrollExample from '../Navbar';
// import Footer from '../Footer';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       alert('Message sent successfully');
//       console.log("jjhhh");
//       const res = await axios.post('http://localhost:8000/contact', {
//         data: formData,
//       });
//       console.log(res.data);
//       // You might want to display a success message here instead of using an alert
//       alert('Message sent successfully');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // You might want to display an error message to the user here
//     }
//   };

//   return (
//     <div className="ContactDiv d-flex flex-column">
//       <Head />
//       <NavScrollExample />
//       <div className="map">
//         <iframe
//           className="frame"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9153242517027!2d88.34550845047504!3d22.6196369850857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681053638249!5m2!1sen!2sin"
//           width="90%"
//           height="650"
//           style={{ border: '0' }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>

//       <section className="section-contact">
//         <div className="contact-content container">
//           <h1 className="main-heading">Contact Us</h1>

//           <section className="section-form">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   autoComplete="off"
//                   value={formData.username}
//                   onChange={handleChange}
//                   placeholder="Username"
//                   required
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="off"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   required
//                 />
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   id="message"
//                   cols="30"
//                   rows="5"
//                   autoComplete="off"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   required
//                 ></textarea>
//               </div>

//               <div className="button07">
//                 <button type="submit">Submit</button>
//               </div>
//             </form>
//           </section>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }



import React, { useState } from 'react';
import Head from '../Head';
import NavScrollExample from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';
import '../css/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res =  axios.post('http://localhost:8000/contact', {
        data: formData,
      });
      console.log(res.data);
      alert('Message sent successfully');
      // Optionally, reset the form after successful submission
      // setFormData({
      //   username: '',
      //   email: '',
      //   message: '',
      // });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="ContactDiv d-flex flex-column">
      <Head />
      <NavScrollExample />
      <div className="map">
        <iframe
          className="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9153242517027!2d88.34550845047504!3d22.6196369850857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681053638249!5m2!1sen!2sin"
          width="90%"
          height="650"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="button07">
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
      {formData.message}
      <Footer />
    </div>
  );
}
