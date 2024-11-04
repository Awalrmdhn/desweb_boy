import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar'; // Import Navbar
import HomePage from './pages/Homepage'; // Import HomePage
import DropPoint from './pages/DropPoint';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar akan muncul di semua halaman */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Direct root path to HomePage */}
        <Route path="/DropPoint" element={<DropPoint />} /> {/* Direct DropPoint path to DropPoint */}
      </Routes>
    </div>
  );
}

export default App;
