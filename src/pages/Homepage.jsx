import React from "react";
import BannerBackground from "../Assets/Banner Background.png";
import BannerImage from "../Assets/mantan_shoes logo.png";
import AboutBackground from "../Assets/About Section Background.png";
import AboutBackgroundImage from "../Assets/sepatu.png";
import PickSepatu from "../Assets/pick sepatu.png";
import ChooseService from "../Assets/cursor-pointer.png";
import Delivery from "../Assets/delivery.png";
import ProfilePic from "../Assets/john-doe-image.png";
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const HomePage = () => {
  const workInfoData = [
    {
      image: PickSepatu,
      title: "Pick Shoes",
      text: "Pilih sepatu yang ingin kamu rawat. Mulai dari sneakers hingga boots, Mantan Shoes siap kasih perawatan terbaik untuk semua jenis sepatu!",
    },
    {
      image: ChooseService,
      title: "Choose Service",
      text: "Pilih layanan sesuai kebutuhan sepatu kamu – dari deep clean, deodorizing, hingga stain removal. Kami punya paket lengkap untuk bikin sepatu kamu kembali maksimal!",
    },
    {
      image: Delivery,
      title: "Fast Deliveries",
      text: "Sepatu selesai dan siap diantar! Kami pastikan sepatu kamu balik dengan tampilan yang lebih fresh, wangi, dan siap menemani aktivitas kamu lagi!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Home Banner Section */}
      <div className="relative flex pt-12 ml-5 mt-20">
        {/* <div className="absolute top-[-200px] right-[-170px] z-[-2] max-w-[700px]">
          <img src={BannerBackground} alt="Banner Background" className="w-full h-auto" />
        </div> */}
        <div className="flex-1 flex flex-col justify-center items-start px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-600 max-w-xl mb-4">Buat mantan lo balik dengan sepatu bersih dan wangi!</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-6">Sepatu kotor? Biar kami yang urus. Mantan Shoes siap balikin sepatu lo ke mode on-point!</p>
          <a href="/DropPoint" className="w-full sm:w-auto">
            <button className="bg-blue-600 text-white py-3 px-8 w-full rounded-full hover:bg-blue-700 transition flex items-center justify-center">
              Temukan Lokasi Cuci <FiArrowRight className="ml-2" />
            </button>
          </a>
        </div>
        <div className="flex-1">
          <img src={BannerImage} alt="Banner Image" className="w-[60%] mx-auto md:w-[40%] h-auto" />
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
              Learn More
            </button>
            
            </a>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className="mt-32 text-center">
        <p className="text-xl text-blue-600 font-semibold mb-2  ">Work</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">How It Works</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Cara Mantan Shoes Bikin Sepatu Kamu Tetap On-Point: Setiap Langkah Didesain untuk Hasil Terbaik
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {workInfoData.map((data) => (
            <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
              <img src={data.image} alt={data.title} className="w-24 h-24 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-4">{data.title}</h2>
              <p className="text-gray-600">{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-32 bg-white py-12 px-6 rounded-xl shadow-lg max-w-lg mx-auto text-center mb-10">
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
      </div>
    </div>
  );
};

export default HomePage;
