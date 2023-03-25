import React from 'react';
import './App.css';
import Main from './components/Main';
import Head from './components/Head'
import { BrowserRouter } from 'react-router-dom';
import NavScrollExample from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Head />

      <BrowserRouter>
        <NavScrollExample />
      </BrowserRouter>
      
      <Main />
    </div>
  );
}

export default App;
