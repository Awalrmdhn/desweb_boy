import React from 'react';
import logoImage from "../assets/mantan_typography.png"; // Sesuaikan path logo sesuai lokasi

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center ml-10">
          <img src={logoImage} alt="Mantan Shoes Clean Logo" className="h-10 w-auto" />
        </div>
        
        {/* Menu Links */}
        <div className="flex space-x-8 mr-20">
        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
          <a href="/DropPoint" className="text-gray-800 hover:text-gray-600">Drop Point</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Wash</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Course</a>
          <a href="/Store" className="text-gray-800 hover:text-gray-600">Store</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
