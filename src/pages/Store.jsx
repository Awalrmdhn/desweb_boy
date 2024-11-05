import React from 'react';
import productImage from '../assets/item_1.png'; 
import HeroImage from '../assets/hero_image.png';
import Navbar from '../component/navbar';

const Store = () => {
  // Data produk
  const products = [
    { name: "Sikat Medium", image: productImage, link: "#" },
    { name: "Sikat Medium", image: productImage, link: "#" },
    { name: "Sikat Medium", image: productImage, link: "#" },
    { name: "Sikat Medium", image: productImage, link: "#" },
    { name: "Sikat Medium", image: productImage, link: "#" },
    { name: "Sikat Medium", image: productImage, link: "#" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-gray-700 to-gray-500 flex flex-col sm:flex-row items-center py-10 px-6 overflow-hidden mt-1">
        <div className='flex-1 z-10 text-center'>
          <h2 className="text-white text-5xl font-bold">
            GET YOUR OWN STUFF!!
          </h2>
          <h1 className='text-white text-2xl font-bold mt-2'>
            Menjual Perlengkapan Cuci Sepatu 
          </h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto my-4 px-4">
        <button className="text-blue-500 hover:underline">{"<< Back"}</button>
      </div>

      {/* Store Section */}
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Store</h3>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
               <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain rounded-md mb-4" // Ubah "object-cover" menjadi "object-contain"
                />
                  <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                  <a
                    href={product.link}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Link Produk
                  </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-8 py-4 text-center text-sm text-gray-600">
        <p>© 2024 MANTAN. All Rights Reserved.</p>
        <p>Alamat: Jl. Example Street No.123, Kota, Provinsi</p>
        <p>Email: info@example.com | Telepon: +62 123-4567-890</p>
      </footer>
    </div>
  );
};

export default Store;