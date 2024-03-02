import React,{useState} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './css/Login.css';


const Loginstudent = () => {
    const navigate=useNavigate()  
    const [msg,setMsg]=useState("")
    const [formData, setFormData] = useState({
      email: '',
      password:'',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      let submit = async (e) => {
        e.preventDefault()
        console.log("SignUp")
    
        try {
    
         // alert("Submited")
          const res=await axios.post("http://localHost:8000/login", {  
              "data":formData
          })
          console.log(res.data)
          if(res.data.valid=='0'){
            alert("invalid");
          }
          else{
              alert("valid");
              localStorage.setItem("token_key",res.data.token)
             navigate('/adminHome')
          }
    
      }
      catch {
          console.log(e);
      }
    }



    return (
        <>
        <form onSubmit={submit}>
        <div className="bgLogin d-flex justify-content-center align-items-center">
            <div className="formCont d-flex flex-column text-center pe-3">
                <h2 className="my-3">Student Login</h2>


            
                <input className="mt-4" type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange}
                id="email" />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
                id="password" />
                <span className="ms-auto mt-4">Forgot Password?</span>

                
                <button className="button-85 mx-auto mt-5" role="button">Log in</button>
              
                <NavLink to="/signup"> Create an account</NavLink>
            </div>
        </div>
        </form>
        </>
    )
}
export { Loginstudent };