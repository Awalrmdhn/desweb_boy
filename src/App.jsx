import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage'; // Import your HomePage component

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Direct root path to HomePage */}
      </Routes>
  );
}

export default App;
