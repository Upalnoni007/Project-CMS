import React from 'react';
import './App.css';
import Main from './components/Main';
import Head from './components/Head'
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Head />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
