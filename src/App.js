<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
>>>>>>> 688a34a12af1bab5b578ec9190ea2ed089101206
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 688a34a12af1bab5b578ec9190ea2ed089101206
