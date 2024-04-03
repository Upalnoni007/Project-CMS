import React from 'react';
import '../css/Attendance.css'
import {useReactToPrint}from "react-to-print";
import { useRef} from "react";




const Attendance = () => {


    <div className='stream'>

    <h1>Attendance Records Of ECS</h1>
      <div className='sem'>
        <h2>6th Semester</h2>
      </div>
    </div>


const componentPDF=useRef();

  // Sample data for demonstration
  const students = [
    { name: 'Upal Mitra', code1: { total: 50, attended: 30 }, code2: { total: 60, attended: 40 }, code3: { total: 70, attended: 50 } },
    { name: 'Suman Maji', code1: { total: 55, attended: 45 }, code2: { total: 65, attended: 55 }, code3: { total: 75, attended: 65 } },
    { name: 'Nilay Pal', code1: { total: 50, attended: 30 }, code2: { total: 60, attended: 40 }, code3: { total: 70, attended: 50 } },
    { name: 'Biswajit Nag', code1: { total: 55, attended: 45 }, code2: { total: 65, attended: 55 }, code3: { total: 75, attended: 65 } },
    { name: 'Akash Das', code1: { total: 50, attended: 30 }, code2: { total: 60, attended: 40 }, code3: { total: 70, attended: 50 } },
    { name: 'Swapan Biswas', code1: { total: 55, attended: 45 }, code2: { total: 65, attended: 55 }, code3: { total: 75, attended: 65 } },
    { name: 'Debjoy Roy', code1: { total: 50, attended: 30 }, code2: { total: 60, attended: 40 }, code3: { total: 70, attended: 50 } },
    { name: 'Rahul Mahato', code1: { total: 55, attended: 45 }, code2: { total: 65, attended: 55 }, code3: { total: 75, attended: 65 } },
    { name: 'Ayush Ghosh', code1: { total: 50, attended: 30 }, code2: { total: 60, attended: 40 }, code3: { total: 70, attended: 50 } },
    { name: 'Atanu Nag', code1: { total: 55, attended: 45 }, code2: { total: 65, attended: 55 }, code3: { total: 75, attended: 65 } },
    { name: 'Argha Ghosh', code1: { total: 50, attended: 30 }, code2: { total: 60, attended: 40 }, code3: { total: 70, attended: 50 } },
    { name: 'Supratik Chakraborty', code1: { total: 55, attended: 35 }, code2: { total: 65, attended: 45 }, code3: { total: 75, attended: 57 } },
    // Add more student data as needed
  ];

 



  const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"Userdata",
    onAfterPrint:()=>alert("Data saved in pdf")
  });

  return (
    <><></>
    <div className='main-stream'>
    <div className='stream-1'>

      <h1>Attendance Records Of ECE</h1>
    </div>

    <div className='sem'>
        <h2>8th Semester</h2>
      </div>
    </div>
    
    <div>
        <div ref={componentPDF} style={{ width: "100%" }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th colSpan={2}>PE-EC 802B</th>
                <th colSpan={2}>PE-EC 801C</th>
                <th colSpan={2}>OE-HU 801H</th>
              </tr>
              <tr>
                <th></th>
                <th>Total</th>
                <th>Attended</th>
                <th>Total</th>
                <th>Attended</th>
                <th>Total</th>
                <th>Attended</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.code1.total}</td>
                  <td>{student.code1.attended}</td>
                  <td>{student.code2.total}</td>
                  <td>{student.code2.attended}</td>
                  <td>{student.code3.total}</td>
                  <td>{student.code3.attended}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pdf-7">
          <button className="button-34" onClick={generatePDF}>Downlowd PDF</button>
        </div>
      </div></>


  );
  
};

export default Attendance;
