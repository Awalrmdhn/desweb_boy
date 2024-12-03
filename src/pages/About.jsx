import React from 'react';
import Owner from '../assets/Owner.jpg'; // Pastikan path gambar benar
import backgroundImage from '../assets/hero_image.png'; // Pastikan path gambar benar
import awal from '../assets/awal.jpeg';
import dihan from '../assets/dihan.jpeg';
import king from '../assets/king-rimba.jpeg';
import dhio from '../assets/dhio.jpeg';
import ayu from '../assets/ayu.jpeg';
const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-pink-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Menambahkan gambar latar belakang
      ></div>

      {/* Overlay to darken the background image for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative w-full max-w-6xl px-8 py-24 z-20">
        <h1 className="text-6xl font-bold mb-12 text-white">ABOUT US.</h1>
        <div className="bg-white shadow-lg rounded-lg p-12">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Who?</h2>
            <p className="text-2xl font-semibold">Mantan shoes clean adalah usaha yang bergerak dibidang cuci sepatu.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative mb-8 md:mb-0 md:mr-12">
              <img
                src={Owner} // Ganti dengan path gambar yang sesuai
                alt="Owner"
                className="w-64 h-64 object-cover square"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-xl">
                Owner
              </div>
            </div>
            <div>
              <p className="text-2xl">
                Mantan shoes clean didirikan oleh owner kami lil nus nus, idenya tercipta saat lil nus nus sedang buang air besar dengan garpit di tangannya.
              </p>
              <div className="mt-8">
                <h3 className="text-3xl font-semibold mb-4">Contact Us:</h3>
                <div className="flex space-x-8">
                  <a href="https://www.instagram.com/mantan_shoesclean?igsh=MTJ2cXoxNXN6dm94OA==" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800">
                    Instagram
                  </a>
                  <a href="https://wa.me/6285752556024" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800">
                    Whatsapp
                  </a>
                </div>
                
              </div>
            </div>
          </div>

          
      {/* Our Team Section - After Content */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold mb-8">Our Team</h2>
        <div className="flex justify-center space-x-8">
          {/* Team Member 1 */}
          <div className="relative">
            <img
              src={awal} // Ganti dengan gambar anggota tim 1
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center ">
              Awal Ramadhani
              11221067
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="relative">
            <img
              src={dhio} // Ganti dengan gambar anggota tim 2
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
              Dhio Anugrah 
              11221004
            </div>
          </div>
          <div className="relative">
            <img
              src={king} // Ganti dengan gambar anggota tim 4
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
              Angger Karisma 
              11221010
            </div>
          </div>``
          {/* Team Member 3 */}
          <div className="relative">
            <img
              src={dihan} // Ganti dengan gambar anggota tim 3
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
              Ananda Dihan Naufal
              11221055
            </div>
          </div>
          {/* Team Member 4 */}
          {/* Team Member 5 */}
          <div className="relative">
            <img
              src={ayu} // Ganti dengan gambar anggota tim 5
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
              Ayu Nabila
              11221084
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>


    </div>
  );
}

export default AboutUs;
