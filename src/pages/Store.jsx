import React from 'react';
import productImage from '../assets/item_1.png'; 
import productImage2 from '../assets/item_2.png';
import productImage3 from '../assets/item_3.png';
import productImage4 from '../assets/item_4.png';


const Store = () => {
  // Data produk
  const products = [
    { name: "Sikat Medium", image: productImage, link: "https://id.shp.ee/B9pG9Dd" },
    { name: "Sikat Kecil", image: productImage4, link: " https://id.shp.ee/LwkW4E7" },
    { name: "Pembersih Sepatu", image: productImage3, link: "https://id.shp.ee/JzoTnUP" },
    { name: "Pengering Sepatu", image: productImage2, link: " https://id.shp.ee/LwkW4E7" },
    { name: "Pelindung Sepatu", image: productImage2, link: "https://id.shp.ee/cUMj8vi" },
    { name: "Sikat Khusus", image: productImage4, link: "https://id.shp.ee/f7Vn1t4" },
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
      {/* Store Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl mt-10 mx-auto">
        <h3 className="text-2xl font-bold mb-6">Store</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={index} 
              className="relative bg-gray-50 p-6 rounded-lg shadow-md flex flex-col"
            >
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-md mb-4"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <hr className="my-2 border-gray-400" />
                <a
                  href={product.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-600 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Link Produk
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
