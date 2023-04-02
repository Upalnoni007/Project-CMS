import React from "react";
import { NavLink } from "react-router-dom";
import './css/Sidebar.css';

const Sidebar =()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 m-0 p-0 sidebar">
                        {/* <div className="sidebar"> */}
                            
                            {/* <div className="sidebar-bottom"> */}
                                <nav>
                                    <NavLink to ="/faculty" className='nav'><i className="fas fa-book-open"></i>Faculty</NavLink>
                                    <NavLink to ="/student" className='nav'><i className="fas fa-tasks"></i>Student</NavLink>
                                    <NavLink to ="/marks" className='nav'><i className="fas fa-user-graduate"></i>Marks</NavLink>
                                    <NavLink to ="/attendance" className='nav'><i className="fas fa-check"></i>Attendance</NavLink>
                                    <NavLink to ="/result" className='nav'><i className="fas fa-hands-helping"></i>Result</NavLink>
                                    {/* <navlink to ="" className='nav'><i class="fas fa-trophy"></i>Achievement</navlink>
                                    <navlink to ="" className='nav'><i class="fas fa-user"></i>Visitors</navlink> */}
                                </nav>
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar