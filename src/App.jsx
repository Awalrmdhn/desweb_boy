import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar'; // Import Navbar
import Footer from './component/footer'; 
import HomePage from './pages/Homepage'; // Import HomePage
import DropPoint from './pages/DropPoint';
import Kursus from './pages/Kursus';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar akan muncul di semua halaman */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Direct root path to HomePage */}
        <Route path="/DropPoint" element={<DropPoint />} /> {/* Direct DropPoint path to DropPoint */}
        <Route path="/Kursus" element={<Kursus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
