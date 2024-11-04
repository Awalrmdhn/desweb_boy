import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar'; // Import Navbar
import HomePage from './pages/Homepage'; // Import HomePage

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar akan muncul di semua halaman */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Direct root path to HomePage */}
      </Routes>
    </div>
  );
}

export default App;
