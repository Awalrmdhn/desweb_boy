import React from "react";
import BannerImage from "../Assets/mantan_shoes logo.png";
import AboutBackground from "../Assets/About Section Background.png";
import AboutBackgroundImage from "../Assets/sepatu.png";
import Video1 from "../Assets/Video1.mp4";
import Video2 from "../Assets/Video2.mp4";
import Video3 from "../Assets/Video3.mp4";
import { FiArrowRight } from "react-icons/fi";

const HomePage = () => {
  const workInfoData = [
    {
      image: Video1,  
    },
    {
      image: Video2,
    },
    {
      image: Video3,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Home Banner Section */}
      <div className="relative flex pt-12 ml-5 mt-20">
        <div className="flex-1 flex flex-col justify-center items-start px-6 text-center md:text-left">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-600 max-w-xl mb-4 ml-20">Buat mantan lo balik dengan sepatu bersih dan wangi!</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-6 ml-20">Sepatu kotor? Biar kami yang urus. Mantan Shoes Clean siap balikin sepatu lo ke mode on-point!</p>
          <a href="/DropPoint" className="w-full sm:w-auto">
            <button className="bg-blue-600 text-white py-3 px-8 w-full rounded-full hover:bg-blue-700 transition flex items-center justify-center ml-20">
              Temukan Drop Point <FiArrowRight className="ml-2" />
            </button>
          </a>
        </div>
        {/* <div>
          <img src={BannerBackground} alt="Banner Background" className="w-[60%] mx-auto md:w-[40%] h-auto"/>
        </div> */}
        <div className="flex-1">
          <img src={BannerImage} alt="Banner Image" className="w-[60%] mx-auto md:w-[60%] h-auto" />
        </div>
      </div>
      
      {/* About Section */}
      <div className="mt-52 relative flex flex-col md:flex-row items-center">
        <div className="absolute left-[-150px] z-[-2]">
          <img src={AboutBackground} alt="About Background" className="w-full h-auto" />
        </div>
        <div className="flex-1 mb-8 md:mb-0 md:mr-4">
          <img 
            src={AboutBackgroundImage} 
            alt="About Background Image" 
            className="w-[90%] md:w-[80%] h-auto mx-auto" 
          />
        </div>

        <div className="flex-1 flex flex-col items-start text-center md:text-left px-6">
          <p className="text-blue-600 font-semibold text-xl mb-4">About</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-600 max-w-xl mb-4">Biarin Mantan Shoes bikin sepatu lo siap tampil stylish lagi!</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-lg mb-4">
            Di Mantan Shoes, kami paham sepatu favorit lo butuh perawatan khusus. Dengan layanan premium, kami pastikan setiap sepatu yang masuk jadi bersih, wangi, dan siap menemani langkah keren lo lagi!
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-lg mb-6">
            Sepatu favorit lo berhak dapet perawatan terbaik. Di Mantan Shoes, kita jamin sepatu lo balik dalam kondisi yang kece!
          </p>
          <div className="flex gap-4">
            <a href="/about">
            <button className="py-3 px-8 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
              About Us
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className="mt-32 text-center">
        <p className="text-xl text-blue-600 font-semibold mb-2">Work</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">How It Works</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Cara Mantan Shoes Bikin Sepatu Kamu Tetap On-Point: Setiap Langkah Didesain untuk Hasil Terbaik
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {workInfoData.map((data, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
              <video 
                src={data.image} 
                autoPlay 
                loop 
                muted 
                className="w-full h-auto mx-auto mb-4" 
                alt={data.title}
              />
              <h2 className="text-xl font-semibold text-gray-700 mb-4">{data.title}</h2>
              <p className="text-gray-600">{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      {/* <div className="mt-32 bg-white py-12 px-6 rounded-xl shadow-lg max-w-lg mx-auto text-center mb-10">
        <img src={ProfilePic} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-6" />
        <p className="text-xl font-semibold text-gray-700 mb-6">
          Gak nyangka sepatu lama bisa balik se-fresh ini. Mantan Shoes bener-bener detail banget pas bersihin. Recommended buat yang mau sepatu kembali kece!
        </p>
        <div className="flex justify-center mb-4">
          <AiFillStar color="#0A61AA" />
          <AiFillStar color="#0A61AA" />
          <AiFillStar color="#0A61AA" />
          <AiFillStar color="#0A61AA" />
          <AiFillStar color="#0A61AA" />
        </div>
        <h2 className="text-lg font-semibold text-gray-700">Dhio Anugrah</h2>
      </div> */}
    </div>
  );
};

export default HomePage;