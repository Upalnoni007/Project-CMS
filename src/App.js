import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminhome from './components/adminDashboard/Adminhome';
import About from './components/adminDashboard/About';
import Contact from './components/adminDashboard/Contact';
import ErrPage from './components/adminDashboard/ErrPage';
import Faculty from './components/Faculty';
import Signup from './components/Signup';
import { Loginadmin } from './components/LoginAdmin';
import {Loginfaculty} from "./components/LoginFaculty";
import { Loginstudent } from './components/LoginStudent';
import LoginForAll from './components/LoginForAll';
import Logout from './components/adminDashboard/Logout';
import Result from './components/adminDashboard/Result';
import Tablehoc from './components/adminDashboard/Tablehoc';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavLink to="/login"></NavLink> */}
        <Routes>
          <Route exact path="/" element={<LoginForAll />} />
          <Route exact path="/adminHome" element={<Adminhome />} />
          {/* <Route exact path="/adminHome" element={<Adminhome />} />
          <Route exact path="/studentHome" element={<Adminhome />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/logout" element={<Logout/>} />
          <Route exact path='/faculty' element={<Faculty />} />
          <Route exact path='/result' element={<Result />} />
          {/* <Route exact path='/tablehoc' element={<Tablehoc />} /> */}
          <Route exact path="/*" element={<ErrPage />} />

          {/* <Route exact path='/login' element={<LoginForAll/>}></Route> */}
          <Route exact path='/Loginadmin' element={<Loginadmin/>}></Route>
          <Route exact path='/Loginfaculty' element={<Loginfaculty/>}></Route>
          <Route exact path='/Loginstudent' element={<Loginstudent/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
