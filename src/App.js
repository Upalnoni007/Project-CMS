import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Adminhome from './components/adminDashboard/Adminhome';
import About from './components/adminDashboard/About';
import Contact from './components/adminDashboard/Contact';
import ErrPage from './components/adminDashboard/ErrPage';
import Faculty from './components/Faculty';

import { Loginforall } from './components/LoginForAll';
import { Loginadmin } from './components/LoginAdmin';
import {Loginfaculty} from "./components/LoginFaculty";
import { Loginstudent } from './components/LoginStudent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/login"></NavLink>
        <Routes>
          <Route exact path="/" element={<Adminhome />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path='/faculty' element={<Faculty />} />
          <Route exact path="/*" element={<ErrPage />} />
          <Route exact path='/login' element={<Loginforall/>}></Route>
          <Route exact path='/Loginadmin' element={<Loginadmin/>}></Route>
          <Route exact path='/Loginfaculty' element={<Loginfaculty/>}></Route>
          <Route exact path='/Loginstudent' element={<Loginstudent/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
