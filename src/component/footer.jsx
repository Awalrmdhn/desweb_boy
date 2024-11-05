import React from 'react';
import logoImage from "../assets/mantan_typography.png"; // Sesuaikan path logo sesuai lokasi

const Footer = () => {
  return (
    <footer className="bg-white p-8 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        
        {/* Logo and Locations */}
        <div className="flex-1 pr-10">
            <img src={logoImage} alt="Mantan Shoes Clean Logo" className="h-10 w-auto" />
        <div className="mt-4 space-y-4">
           
          </div>
        </div>

        {/* PPS Menu */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">PPS</h3>
          <ul className="mt-4 space-y-2">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="text-gray-600">PPS</li>
            ))}
          </ul>
        </div>

        {/* Layanan Menu */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Layanan</h3>
          <ul className="mt-4 space-y-2">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="text-gray-600">Layanan</li>
            ))}
          </ul>
        </div>

        {/* Bantuan dan Panduan */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Bantuan dan Panduan</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-600">Syarat dan Ketentuan</li>
            <li className="text-gray-600">Kebijakan Privasi</li>
            <li className="text-gray-600">Bantuan</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-8 border-t pt-4">
        © 2024-3000, PPS
      </div>
    </footer>
  );
}
export default Footer;