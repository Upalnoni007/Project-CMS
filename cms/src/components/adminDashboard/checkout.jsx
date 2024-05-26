import React, { useEffect, useState } from 'react'
import '../css/checkout.css'
import axios from 'axios'

const Checkout = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    examroll:"",
    lastName:"",
    fees:"",
  });
  const [is_login, setIs_login] = useState(0);

  const callAboutPage = async () => {
    try {
      const res = await axios.post("http://localHost:8000/checkout", {
        token: localStorage.getItem("token_key"),
      })
      console.log(res.data);
      setUserData({
        name: res.data.firstName,
        email: res.data.email,
        examroll:res.data.examroll,
        lastName:res.data.lastName,
        fees:res.data.fees,
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const temp = localStorage.getItem("token_key");
    if (temp && temp !== 0) {
      setIs_login(1);
    }

    if (!temp || temp === 0) {

    }
    callAboutPage();
  }, []);


const makePayment= async()=>{
  
    const response = await axios.post("http://localhost:8000/checkout1")
    
    if(response && response.status === 200){
      window.location.href=response.data.url
      console.log(response.data)
    }
  }

  
const makePayment2= async()=>{
  
  const response = await axios.post("http://localhost:8000/checkout2")
  
  if(response && response.status === 200){
    window.location.href=response.data.url
    console.log(response.data)
  }
}

  return (
    <div className='student'>
       <div className="student-card">
      <div className="student-info">
        <div className="student-photo">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudCUyMGltYWdlfGVufDB8fDB8fHww" alt='user' />
        </div>
        <br></br>
       {is_login && (
        <div className="student-details">
          <h2>Name:{userData.name} {userData.lastName}</h2>
          <p>Roll: {userData.examroll}</p>
          <p>Email: {userData.email}</p>
        </div>
       )}
      </div>

      <div className='Due'>
      <p> Payment Status :-
         {userData.fees} 

      </p>

      </div>


      <div className="pdf">
        <button className="button-34" onClick={makePayment}>Semester Fees</button>
       </div>
     
       <div className="pdf">
        <button className="button-34" onClick={makePayment2}>Hostel Fees</button>
       </div>

    </div>
   
     
    </div>
  )
}

export default Checkout
