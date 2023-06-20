import React from 'react';
import './App.css';
import Home from './home';
import Addpage from './Addpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addpage" element={<Addpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
