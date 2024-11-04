import React from 'react';
import logoImage from "../assets/mantan_typography.png";
import bannerLogo from '../assets/mantan_shoes logo.png';
import backgroundImage from '../assets/background.png';
import dropPointImage1 from '../assets/dropPoint1.png'; // ganti dengan path gambar sesuai lokasi
// import dropPointImage2 from '../assets/dropPoint2.png';
// import dropPointImage3 from '../assets/dropPoint3.png';
import Navbar from '../component/navbar';

const DropPoint = () => {
  return (
    <div>
      {/* Drop Point Section */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Drop Point</h2>
        <p className="text-sm mb-8">Lokasi atau titik antar jemput sepatu!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-5xl">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start text-left">
            <img src={dropPointImage1} alt="Rumah Makan Rizki" className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Rumah Makan Rizki</h3>
            <p className="text-gray-600 mt-2">
              JL. Sei Wain No.14 RT 33, Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start text-left">
            <img src={dropPointImage1} alt="MoodzySupplyBpn" className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">MoodzySupplyBpn</h3>
            <p className="text-gray-600 mt-2">
              JL.Ruhuni Rahayu II, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start text-left">
            <img src={dropPointImage1} alt="OtongDistro" className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">OtongDistro</h3>
            <p className="text-gray-600 mt-2">
              JL. Sungai Ampal, RT.43/RW.No.76, Damai, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76124
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DropPoint;
