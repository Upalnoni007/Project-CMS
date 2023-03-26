import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/official-site/nav-items/Home';
import About from './components/official-site/nav-items/About';
import Contact from './components/official-site/nav-items/Contact';
import ErrPage from './components/official-site/nav-items/ErrPage';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/*" element={<ErrPage />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
