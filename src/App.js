import React from 'react';
import './App.css';
import Main from './components/Main';
import Head from './components/Head'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
       <Head/>
      <Navbar/>
      <Main />
    </div>
  );
}

export default App;