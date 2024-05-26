import React from 'react'
import './css/LoginMain.css';
import { FaUserTie, FaUser, FaUserGraduate } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

const LoginForAll = () => {
    return (
        <IconContext.Provider value={{ size: '75px' }}>
            <div className='bg d-flex justify-content-around align-items-center flex-sm-row flex-column'>

                    {/* <div id='adminDiv' className='loginItem text-center d-flex flex-column'>
                        <div className='iconDiv my-4'>
                            <FaUserTie className='loginIcon' />
                        </div>
                        <h5 className='user'>ADMIN</h5>
                        <div className='btnDiv mt-auto'>
                            <NavLink to="/Loginadmin"><button className="btn btn-outline-success">Login</button></NavLink>
                        </div>
                    </div> */}

                    <div id='facultyDiv' className='loginItem text-center d-flex flex-column'>
                        <div className='iconDiv my-4'>
                            <FaUser className='loginIcon' />
                        </div>
                        <h5 className='user'>Faculty</h5>
                        <div className='btnDiv mt-auto'>
                            <NavLink to="/Loginfaculty"><button className="btn btn-outline-success">Login</button></NavLink>
                        </div>
                    </div>

                    <div id='studentDiv' className='loginItem text-center d-flex flex-column'>
                        <div className='iconDiv my-4'>
                            <FaUserGraduate className='loginIcon' />
                        </div>
                        <h5 className='user'>Student</h5>
                        <div className='btnDiv mt-auto'>
                            <NavLink to="/Loginstudent"><button className="btn btn-outline-success">Login</button></NavLink>
                        </div>
                    </div>
                
            </div>
        </IconContext.Provider>
    )
}

export default LoginForAll