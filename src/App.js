import React from 'react';
import Main from './components/Main';
import Head from './components/Head';
// import Navbar from './components/Navbar';
import { BrowserRouter} from 'react-router-dom';
import NavScrollExample from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Head />
      <BrowserRouter>
          {/* <Route exact path="/" element={<Navbar/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route> */}
          <NavScrollExample></NavScrollExample>
      </BrowserRouter>
      <Main />
    </div>
  );
}
export default App;
