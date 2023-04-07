import React from "react";
import { NavLink } from "react-router-dom";
import './css/Login.css';
const Loginadmin=()=>{
    return(
        <>
            <img src="https://images.pexels.com/photos/6984992/pexels-photo-6984992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="login-pic" height="740px" width="100%"/>
            <div className="flex-container">
                <div className="flex-item">
                    <h2 style={{color:'rgb(2, 163, 2)',textAlign:"center",paddingTop:"15px"}}>Admin Login</h2>
                    <input type="email" name="mail" placeholder="Email address"/><i class="fas fa-envelope"></i>
                    <input type="password" name="password" placeholder="Password"/><i class="fas fa-lock"></i>
                    <div className="forgot-password">
                        <nav>
                            <NavLink to="" className="forgot">Forgot Password ?</NavLink>
                        </nav>
                    </div>
                    <button className="Login">Log In</button>
                </div>
            </div>
        </>
    )
}
export {Loginadmin};