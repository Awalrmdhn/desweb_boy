import React from 'react';
import logoImage from "../assets/mantan_typography.png";

const Footer = () => {
  const dropPoints = [
    {
      name: "Rumah Makan Rizki",
      address: "JL. Sei Wain No.14 RT 33, Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127",
    },
    {
      name: "MoodzySupplyBpn",
      address: "JL.Ruhuni Rahayu II, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115",
    },
    {
      name: "OtongDistro",
      address: "JL. Sungai Ampal, RT.43/RW.No.76, Damai, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76124",
    },
  ];

  return (
    <footer className="bg-white p-8 border-t pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        
        {/* Logo and Locations */}
        <div className="flex-1 pr-1 mr-20">
          <img src={logoImage} alt="Mantan Shoes Clean Logo" className="h-20 w-auto" />
        </div>

        {/* PPS Menu */}
        <div className="flex-1 mb-2">
          <h3 className="text-lg font-semibold">Drop Point</h3>
          <ul className="mt-4 space-y-2">
            {dropPoints.map((dropPoint, index) => (
              <li key={index} className="text-gray-600">
                <strong className="text-sm">{dropPoint.name}</strong>
                <p className="text-xs mt-1 my-2">{dropPoint.address}</p> 
              </li>
            ))}
          </ul>
        </div>

        {/* Layanan Menu */}
        <div className="flex-1 mb-2">
          <h3 className="text-lg font-semibold">Layanan</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-600">Cuci Sepatu</li>
            <li className="text-gray-600">Reparasi Sepatu</li>
            <li className="text-gray-600">Treatment Premium</li>
            <li className="text-gray-600">Shop</li>
            <li className="text-gray-600">Kursus Cuci Sepatu</li>
          </ul>
        </div>

        {/* Bantuan dan Panduan */}
        <div className="flex-1 mb-2">
          <h3 className="text-lg font-semibold">Bantuan dan Panduan</h3>
          <a href="https://wa.me/6285752556024" target="_blank" rel="noopener noreferrer" className="text-2xl  text-gray-600 hover:text-black">
                    Whatsapp
            </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-8 border-t pt-4">
        © 2024 Mantan Shoes Clean. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
