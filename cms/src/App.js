import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminhome from './components/adminDashboard/Adminhome';
import About from './components/adminDashboard/About';
import Contact from './components/adminDashboard/Contact';
import Student from './components/Student';
import ErrPage from './components/adminDashboard/ErrPage';
import Faculty from './components/Faculty';
import Signup from './components/Signup';
// import { Loginadmin } from './components/LoginAdmin';
import {Loginfaculty} from "./components/LoginFaculty";
import { Loginstudent } from './components/LoginStudent';
import LoginForAll from './components/LoginForAll';

import Result from './components/adminDashboard/Result';
import Attendance from './components/adminDashboard/Attendance';
import Checkout from './components/adminDashboard/checkout';
import Success from './components/adminDashboard/success';
import Cancel from './components/adminDashboard/cancel';
import Teacherhome from './components/adminDashboard/Teacherhome';
import Uploadmars from './components/adminDashboard/Uploadmars';
import Camarks from './components/adminDashboard/Camarks';
import { Enter } from './components/adminDashboard/Enter';
import Logout from './components/adminDashboard/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavLink to="/login"></NavLink> */}
        <Routes>
          <Route exact path="/" element={<LoginForAll />} />
          <Route exact path="/adminHome" element={<Adminhome />} />
          <Route exact path="/teacherhome" element={<Teacherhome/>} />
          {/* <Route exact path="/adminHome" element={<Adminhome />} />
          <Route exact path="/studentHome" element={<Adminhome />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/student" element={<Student/>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path='/faculty' element={<Faculty />} />
          <Route exact path='/result' element={<Result />} />
          <Route exact path='/camarks' element={<Uploadmars />} />
          <Route exact path='/enter' element={<Enter />} />
          <Route exact path='/ca' element={<Camarks />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/sucess' element={<Success />} />
          <Route exact path='/cancel' element={<Cancel />} />
          <Route exact path='/attendance' element={<Attendance />} />
          {/* <Route exact path='/tablehoc' element={<Tablehoc />} /> */}
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path="/*" element={<ErrPage />} />

          {/* <Route exact path='/login' element={<LoginForAll/>}></Route> */}
          {/* <Route exact path='/loginadmin' element={<Loginadmin/>}></Route> */}
          <Route exact path='/loginfaculty' element={<Loginfaculty/>}></Route>
          <Route exact path='/loginstudent' element={<Loginstudent/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
