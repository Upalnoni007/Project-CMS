import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/adminDashboard/nav-items/Home';
import About from './components/adminDashboard/nav-items/About';
import Contact from './components/adminDashboard/nav-items/Contact';
import ErrPage from './components/adminDashboard/nav-items/ErrPage';
import Faculty from './components/Faculty';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path='/faculty' element={<Faculty />} />
          <Route exact path="/*" element={<ErrPage />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
