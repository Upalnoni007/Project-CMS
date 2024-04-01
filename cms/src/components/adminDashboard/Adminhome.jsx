import React from 'react'
import Head from '../Head'
import NavBar from '../Navbar'
import Card from 'react-bootstrap/Card';
import '../css/Admin.css'
import { NavLink } from 'react-router-dom';

const Adminhome = () => {
    return (
        <>
            <Head />
            <NavBar />

            <div className="div-1 text-center mt-3 d-flex gap-4 justify-content-center mb-3">

                <Card className=' cards px-1'>
                    <Card.Img className='facultyImg mx-auto' variant="top" src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg?w=740&t=st=1681049347~exp=1681049947~hmac=306a325140bb0d168864cbc9de105bd5a2302b5ec3af0c0eaa56571307a12a8e" alt="1" />
                    <Card.Body>
                        <NavLink className={'links'} to='/faculty'> <Card.Title>Faculty</Card.Title></NavLink>
                    </Card.Body>
                </Card>


                <Card className='cards px-1'>
                    <Card.Img className='facultyImg mx-auto' variant="top" src="https://img.freepik.com/free-vector/study-abroad-concept-illustration_114360-7493.jpg?w=740&t=st=1681049478~exp=1681050078~hmac=59d0ffa5620b2a7bf0d76f17c77cd1afd724bd9216cf506c1b4b53531a163851" alt="2" />
                    <Card.Body>
                        <NavLink className={'links'} to='/*'> <Card.Title>Students</Card.Title></NavLink>
                    </Card.Body>
                </Card>


                <Card className='cards px-1'>
                    <Card.Img className='facultyImg mx-auto' variant="top" src="https://img.freepik.com/free-vector/employee-marking-deadline-day-man-with-pencil-appointing-date-event-making-note-calendar-vector-illustration-schedule-agenda-time-management_74855-8347.jpg?w=1380&t=st=1681049548~exp=1681050148~hmac=d795f6b0b819e185d950dd680a01c17ae5a0d448dd39c6813d23e11a1ed34eba" alt="3" />
                    <Card.Body>
                        <NavLink className={'links'} to='/*'> <Card.Title>Attendance</Card.Title></NavLink>
                    </Card.Body>
                </Card>

                <Card className='cards px-1'>
                    <Card.Img className='facultyImg mx-auto' variant="top" src="https://img.freepik.com/premium-vector/exam-results-with-excellent-unsatisfactory-grades-paper-with-knowledge-assessment-best-worst-estimation-isolated-cartoon-set_91248-744.jpg?w=740" alt="4" />
                    <Card.Body>
                        <NavLink className={'links'} to='/result'> <Card.Title>Result</Card.Title></NavLink>

                    </Card.Body>
                </Card>



            </div>
        </>
    )
}

export default Adminhome