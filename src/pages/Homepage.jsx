import React from 'react';
import logoImage from "../assets/mantan_typography.png";
import bannerLogo from '../assets/mantan_shoes logo.png';
import backgroundImage from '../assets/background.png';

const HomePage = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          {/* Logo */}
          <div className="logo flex items-center">
            <img src={logoImage} alt="Logo" className="h-10 w-10 mr-3" />
          </div>

          {/* Menu Links */}
          <div className="menu-links">
            <a href="#" className="text-white mr-6 hover:text-gray-400">About Us</a>
            <a href="#" className="text-white mr-6 hover:text-gray-400">Drop Point</a>
            <a href="#" className="text-white mr-6 hover:text-gray-400">Wash</a>
            <a href="#" className="text-white mr-6 hover:text-gray-400">Course</a>
            <a href="#" className="text-white hover:text-gray-400">Store</a>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-6 rounded">
            <img src={bannerLogo} alt="Logo" className="w-20 h-20 mb-4" />
            <h1 className="text-3xl font-bold uppercase">Layanan Cuci Sepatu Profesional</h1>
            <p className="mt-2 text-lg">Bersih, Wangi, dan Siap Pakai Kembali</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-5xl">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
            <p>Membersihkan sepatu hingga ke dalam, menghilangkan kotoran dan bau.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Repaint</h3>
            <p>Mengembalikan warna sepatu agar tampak seperti baru.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Sole Whitening</h3>
            <p>Memutihkan sol sepatu agar kembali bersih dan cerah.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Apa Kata Pelanggan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-5xl">
          <div className="bg-gray-200 p-6 rounded shadow">
            <p>"Sepatu saya jadi seperti baru lagi. Layanan sangat memuaskan!"</p>
            <h3 className="mt-4 text-lg font-semibold">- Andi</h3>
          </div>
          <div className="bg-gray-200 p-6 rounded shadow">
            <p>"Pengerjaan cepat dan hasilnya bersih banget. Bakal langganan nih!"</p>
            <h3 className="mt-4 text-lg font-semibold">- Sinta</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
        <p className="mb-4">Ingin menanyakan sesuatu? Hubungi kami melalui kontak di bawah ini.</p>
        <form className="flex flex-col max-w-sm mx-auto space-y-4">
          <input type="text" placeholder="Nama" className="p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
          <textarea placeholder="Pesan" className="p-2 border border-gray-300 rounded" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Kirim Pesan</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
