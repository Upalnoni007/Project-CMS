import React from "react";
import { NavLink } from "react-router-dom";
import './css/Login.css';
import './css/Button-85.css';


const Loginadmin = () => {
    return (
        <div className="bgLogin d-flex justify-content-center align-items-center">
            <div className="formCont d-flex flex-column text-center pe-3">
                <h2 className="my-3">Admin Login</h2>
                <input className="mt-4" type="email" name="email" placeholder="Email address" id="email" />
                <input type="password" name="password" placeholder="Password" id="password" />
                <span className="ms-auto mt-4">Forgot Password?</span>

                <NavLink className={"adminLogBtn mx-auto mt-5"} to="/adminHome"><button className="button-85" role="button">Log in</button></NavLink>
            </div>
        </div>
    )
}
export { Loginadmin };