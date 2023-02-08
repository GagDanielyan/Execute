import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutRoute from './routes/AboutRoute';
import Home from './routes/HomeRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path='/about' element={ <AboutRoute /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
