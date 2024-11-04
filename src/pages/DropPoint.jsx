import React from 'react';
import dropPointImage1 from '../assets/dropPoint1.png'; 
import Navbar from '../component/navbar';

const DropPoint = () => {
  // Daftar lokasi dengan URL peta
  const locations = [
    {
      name: "Rumah Makan Rizki",
      address: "JL. Sei Wain No.14 RT 33, Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=-1.2005,116.9000",
      image: dropPointImage1,
    },
    {
      name: "MoodzySupplyBpn",
      address: "JL.Ruhuni Rahayu II, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=-1.2000,116.8900",
      image: dropPointImage1,
    },
    {
      name: "OtongDistro",
      address: "JL. Sungai Ampal, RT.43/RW.No.76, Damai, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76124",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=-1.2050,116.9100",
      image: dropPointImage1,
    },
    {
      name: "Dhio Cribs",
      address: "Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76116",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=-1.2020,116.8950",
      image: dropPointImage1,
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center ">
      {/* Header Section */}
      <div className="relative w-full bg-gradient-to-r from-gray-700 to-gray-500 flex flex-col sm:flex-row items-center py-10 px-6 overflow-hidden mt-1">
        <div className="flex-1 z-10 text-center">
          <h2 className="text-white text-5xl font-bold">Drop Point 📍</h2>
          <h1 className="text-white text-2xl font-bold mt-2">daftar drop point mantan_shoes</h1>
        </div>
      </div>

      {/* Wrapper for all cards */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl mt-10">
        {/* Card List */}
        <div className="flex flex-col gap-6">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="relative bg-gray-50 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start mb-6"
            >
              <img src={location.image} alt={location.name} className="w-full sm:w-64 h-56 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4" />
              <div className="flex-1 ml-3 mt-2">
                <h3 className="text-xl font-semibold">{location.name}</h3>
                <hr className="my-2 border-gray-400" />
                <p className="text-gray-600 mt-2">{location.address}</p>
              </div>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 mr-4 absolute bottom-4 right-4 bg-gray-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Lihat di Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropPoint;
