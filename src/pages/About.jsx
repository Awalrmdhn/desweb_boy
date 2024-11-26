import React from 'react';
import Owner from '../assets/Owner.jpg'; // Ensure the path to your image is correct
import backgroundImage from '../assets/hero_image.png'; // Ensure the path to your image is correct

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
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-800">
                    Facebook
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-blue-600">
                    Twitter
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800">
                    Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-900">
                    LinkedIn
                  </a>
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