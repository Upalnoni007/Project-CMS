import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/LoginMain.css';
const Loginforall=()=>{
    return(
        <>
            <img className='img' src="https://images.pexels.com/photos/6984992/pexels-photo-6984992.jpeg?auto=compress&cs=tinysrgb&w=600" height="200%" width="100%"  alt="login-pic2"/>
            <div className='fcontainer'>
                <div className='fitem'>
                    <i id="admin" class="fas fa-user-tie"></i>
                    <h3>ADMIN</h3>
                    <nav>
                        <NavLink to="/Loginadmin"><button className="btn btn-outline-success">Login</button></NavLink>
                    </nav>
                </div>
                <div className='fitem'>
                <i id="faculty" class="fas fa-user"></i>
                    <h3>FACULTY</h3>
                    <nav>
                        <NavLink to="/Loginfaculty"><button className="btn btn-outline-success">Login</button></NavLink>
                    </nav>
                </div>
                <div className='fitem'>
                    <i id="student" class="fas fa-user-graduate"></i>
                    <h3>STUDENT</h3>
                    <nav>
                        <NavLink to="/Loginstudent"><button className="btn btn-outline-success">Login</button></NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}
export {Loginforall};