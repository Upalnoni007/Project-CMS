import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/LoginMain.css';
const Loginforall=()=>{
    return(
        <>
            <img src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="649px" width="100%" alt="login-pic2"/>
            <div className='fcontainer'>
                <div className='fitem'>
                    <i id="admin" class="fas fa-user-tie"></i>
                    <h3>ADMIN</h3>
                    <nav>
                        <NavLink to="/Loginadmin"><button className="btn btn-outline-success">Click Me</button></NavLink>
                    </nav>
                </div>
                <div className='fitem'>
                <i id="faculty" class="fas fa-user"></i>
                    <h3>FACULTY</h3>
                    <nav>
                        <NavLink to="/Loginfaculty"><button className="btn btn-outline-success">Click Me</button></NavLink>
                    </nav>
                </div>
                <div className='fitem'>
                    <i id="student" class="fas fa-user-graduate"></i>
                    <h3>STUDENT</h3>
                    <nav>
                        <NavLink to="/Loginstudent"><button className="btn btn-outline-success">Click Me</button></NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}
export {Loginforall};