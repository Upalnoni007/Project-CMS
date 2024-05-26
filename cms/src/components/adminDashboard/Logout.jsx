import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/Logout.css';

function Logout() {

  const navigate=useNavigate();
    const [is_login,setIs_login]=useState(0)

    useEffect(()=>{
        const temp=localStorage.getItem("token_key")
        if(temp && temp!=0){
            setIs_login(1);
          }

    },[])

 const handleLogout=()=>{
    localStorage.setItem("token_key",0)
    setIs_login(0)
    navigate('/')
 }

  return (
    <div className="body1">
    <div className= "logout">
    {is_login==1 && <>
        <h2>Logout</h2>
      <p> Are you sure you want to logout? </p>
     
      <button onClick={handleLogout} >Logout</button>
    </>}
    {is_login === 0 && <Link to="/">Please login</Link>}
     
    </div>
    </div>
  )
}

export default Logout
