import React from "react";
import './css/Head.css';
const Head =()=>{
    return(
        <>
        <div className="header d-flex justify-content-center gap-4">
            <div className='hi d-flex align-items-center ps-1'>
               <img src="img/logo2.png" alt="logo"></img>
            </div>
            <div className="mc d-flex flex-column gap-1"> 
                <h1 className="my-auto"> MCKV Institute Of Engineering</h1>
                <h5 className="my-auto"> NAAC accredited autonomus institute under UGC act 1965,Affiliated to MAAKUT</h5>
            </div>
        </div>
        </>
    )
}
export default Head