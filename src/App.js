import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Slog from './pages/Slog';
import Work from './pages/Work';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Work' element={<Work />} />
          <Route path='/Slog' element={<Slog />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/FAQ' element={<FAQ />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
