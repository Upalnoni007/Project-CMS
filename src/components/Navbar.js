import React from "react";
import './css/Navbar.css';
const Navbar =()=>{
    return(
        <>
          <div className='nav2'>
          <button className='nav1'> Home</button>
          <button className='nav1'> About</button>
          <button className='nav1'> History</button>
          <button className='nav1'> Contact Us</button>
          <h2> <input type="text" placeholder="Search.." className='nav1'></input></h2>
          </div>
        </>
    )
}   
export default Navbar   