import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Numerocelular from './components/Numerocelular';
import Tokendeconfirmacion from './components/Tokendeconfirmacion';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Numerocelular />} />
          <Route path='user' element={<Nav />} />
          <Route path="token" element={<Tokendeconfirmacion />} />
          <Route path="errortoken" element={<Error />} />
        </Routes>
      </BrowserRouter> */}
      <Nav />
    </div>
  );
}

export default App;
