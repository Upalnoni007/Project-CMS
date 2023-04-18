import React from "react";
import Head from '../Head'
import NavScrollExample from '../Navbar'
import '../css/Admin.css'
import { NavLink } from "react-router-dom";
export default function Adminhome() {
    return (
      <>
        <Head />
        <NavScrollExample />
        <section>
        <div class="container-fluid"></div>
        <div class="row">
            <div class="col-12 title">
            <h1 class="text-center">Admin Panel</h1>
            </div>
        
        </div>
       </section>
       <section>
        <div class="container mx-auto ">
            <div class="row">
                <div class="col-12 col-md-5 col-lg-4 mx-auto">
                    <div class="card1"> 
                        <img src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg?w=740&t=st=1681049347~exp=1681049947~hmac=306a325140bb0d168864cbc9de105bd5a2302b5ec3af0c0eaa56571307a12a8e" alt="1"/>
                        <div class="btn">
                            
                        <NavLink to ="/faculty" className='nav'><h3 className="faculty">Faculty</h3></NavLink>
                             
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card2"> 
                        <img src="https://img.freepik.com/free-vector/study-abroad-concept-illustration_114360-7493.jpg?w=740&t=st=1681049478~exp=1681050078~hmac=59d0ffa5620b2a7bf0d76f17c77cd1afd724bd9216cf506c1b4b53531a163851" alt="1" height="250px" width="100%"/>
                        <div class="btn">
                            
                        <NavLink to ="/*" className='nav'><h3 className="student">Student</h3></NavLink>
                
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 ">
                    <div class="card4"> 
                        <img src="https://img.freepik.com/free-vector/employee-marking-deadline-day-man-with-pencil-appointing-date-event-making-note-calendar-vector-illustration-schedule-agenda-time-management_74855-8347.jpg?w=1380&t=st=1681049548~exp=1681050148~hmac=d795f6b0b819e185d950dd680a01c17ae5a0d448dd39c6813d23e11a1ed34eba" alt="1" height="250px" width="100%"/>
                        <div class="btn">   
                        <NavLink to ="/*" className='nav'><h3 className="attendance">Attendance</h3></NavLink>
                            
                        </div>
                    </div>
                </div>
                
                
                <div class="col-12 col-md-6 col-lg-4 mt-5">
                    <div class="card4"> 
                        <img src="https://img.freepik.com/premium-vector/exam-results-with-excellent-unsatisfactory-grades-paper-with-knowledge-assessment-best-worst-estimation-isolated-cartoon-set_91248-744.jpg?w=740" alt="1" height="250px" width="100%"/>
                        <div class="btn">   
                        <NavLink to ="/*" className='nav'><h3 className="student">Result</h3></NavLink>
                            
                        </div>
                    </div>
                </div>
    
                <div class="col-12 col-md-6 col-lg-4 mt-5">
                    <div class="card4"> 
                        <img src="https://img.freepik.com/free-vector/realistic-test-paper-composition-with-pencil-stack-students-paperwork-with-marks-correct-answers_1284-54249.jpg?w=740&t=st=1681054221~exp=1681054821~hmac=d2f7a224b95651a7105c50d9432b7fce4a1fea19af21ea2b2111e6f7d4e44c24" alt="1" height="250px" width="100%"/>
                        <div class="btn">   
                        <NavLink to ="/*" className='nav'><h3 className="student">Marks</h3></NavLink>
                            
                        </div>
                    </div>
                </div>
                </div>
            
        </div>
       </section>
        
    
      
      </>
      
    )
  }