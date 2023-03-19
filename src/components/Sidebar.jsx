import React from "react";
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
                                    <navlink to ="" className='nav' id="active"><i class="fas fa-book-open"></i>Faculty</navlink>
                                    <navlink to ="" className='nav'><i class="fas fa-tasks"></i>Student</navlink>
                                    <navlink to ="" className='nav'><i class="fas fa-user-graduate"></i>Marks</navlink>
                                    <navlink to ="" className='nav'><i class="fas fa-check"></i>Attendance</navlink>
                                    <navlink to ="" className='nav'><i class="fas fa-hands-helping"></i>Result</navlink>
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