import React from 'react';
import logoImage from "../assets/mantan_typography.png";
import bannerLogo from '../assets/mantan_shoes logo.png';
import backgroundImage from '../assets/background.png';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      
      {/* Banner Section */}
      <div 
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center text-white p-6 rounded bg-black bg-opacity-60 max-w-lg w-full mx-4">
          <img src={bannerLogo} alt="Logo" className="w-32 h-32 mb-4 mx-auto" />
          <h1 className="text-4xl font-bold uppercase">Layanan Cuci Sepatu Profesional</h1>
          <p className="mt-4 text-lg">Bersih, Wangi, dan Siap Pakai Kembali</p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Deep Cleaning</h3>
            <p>Membersihkan sepatu hingga ke dalam, menghilangkan kotoran dan bau.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Repaint</h3>
            <p>Mengembalikan warna sepatu agar tampak seperti baru.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sole Whitening</h3>
            <p>Memutihkan sol sepatu agar kembali bersih dan cerah.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Apa Kata Pelanggan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4">
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
            <p>"Sepatu saya jadi seperti baru lagi. Layanan sangat memuaskan!"</p>
            <h3 className="mt-4 text-lg font-semibold">- Andi</h3>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
            <p>"Pengerjaan cepat dan hasilnya bersih banget. Bakal langganan nih!"</p>
            <h3 className="mt-4 text-lg font-semibold">- Sinta</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
        <p className="mb-6">Ingin menanyakan sesuatu? Hubungi kami melalui kontak di bawah ini.</p>
        <form className="flex flex-col max-w-lg w-full mx-auto space-y-6 px-4">
          <input type="text" placeholder="Nama" className="p-4 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded-lg" />
          <textarea placeholder="Pesan" className="p-4 border border-gray-300 rounded-lg" />
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500">
            Kirim Pesan
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
