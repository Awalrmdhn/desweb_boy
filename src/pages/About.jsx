import React from 'react';
import Owner from '../assets/Owner.jpg'; // Ensure the path to your image is correct
import ImageIcon from '../assets/mantan_typography.png'; // Ensure the path to your image is correct

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="self-start mb-4">
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center">About Us.</h1>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl">
        {/* Left Column */}
        <div className="md:w-1/2 mb-8 md:mb-0 p-4">
          <h2 className="text-2xl font-semibold mb-4 text-left">Owner</h2>
          <img
            src={Owner} // Replace with the actual path to your image
            className="w-full h-auto mb-4 rounded-lg shadow-lg"
            alt="Owner"
          />
          <div className="border p-6 mb-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Mengapa Memilih Kami?</h2>
            <ol className="list-decimal list-inside text-lg space-y-2 text-justify">
              <li>Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit</li>
              <li>Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit</li>
            </ol>
          </div>
          <img src={ImageIcon} alt="Icon" className="w-32 h-auto mx-auto" />
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
          <div className="border p-6 mb-4 bg-white shadow-lg rounded-lg flex-grow">
            <p className="text-lg leading-relaxed text-justify">
              Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit
            </p>
          </div>
          <div className="border p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Hubungi Kami</h2>
            <p className="text-lg leading-relaxed mb-4 text-justify">Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit, Lorem ipsum dulur silit</p>
            <div className="text-lg text-justify">
              <p className="font-semibold">Phone Number:</p>
              <p className="mb-2">+62 812 3456 7890</p>
              <p className="font-semibold">Social Media:</p>
              <p>@MantanShoesClean</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;