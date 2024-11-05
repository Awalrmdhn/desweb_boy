import React from 'react';
import sepatuImageKulit from '../assets/sepatu_kulit.jpg';
import sepatuImageAnak from '../assets/sepatu_anak.jpg';
import sepatuImageBola from '../assets/sepatu_bola.jpg';
import sepatuImageKanvas from '../assets/sepatu_kanvas.jpg';
import sepatuImageSeude from '../assets/sepatu_seude.jpg';
import bannerImage from '../assets/banner.jpg';

const courses = [
  {
    id: 1,
    title: 'Treatment Sepatu Kulit',
    description: 'Dalam tutorial ini, kami akan menunjukkan cara yang tepat untuk membersihkan dan merawat sepatu kulit. Anda akan belajar langkah-langkah penting yang akan menjaga sepatu kulit Anda tetap terlihat bersih dan tahan lama.',
    imageUrl: sepatuImageKulit,
  },
  {
    id: 2,
    title: 'Treatment Sepatu Kanvas',
    description: 'Dalam tutorial kali ini, kami akan menunjukkan cara mudah dan efektif untuk merawat sepatu kanvas Anda. Dari mencuci hingga merawat, Anda akan mendapatkan pemahaman yang tepat agar sepatu kanvas Anda selalu tampak bersih dan segar.',
    imageUrl: sepatuImageKanvas,
  },
  {
    id: 3,
    title: 'Treatment Sepatu Suede',
    description: 'Dalam tutorial ini, Anda akan belajar memberikan perawatan terbaik untuk sepatu suede dengan benar. Anda akan mengetahui cara membersihkan suede dan cara menjaga sepatu suede tetap dalam kondisi prima.',
    imageUrl: sepatuImageSeude,
  },
  {
    id: 4,
    title: 'Treatment Sepatu Sport',
    description: 'Pelajari cara mudah dan tepat dalam merawat sepatu sport Anda agar tetap nyaman dipakai dan tahan lama. Kami akan menunjukkan langkah-langkah dasar dalam menjaga kebersihan dan ketahanan sepatu sport Anda.',
    imageUrl: sepatuImageBola,
  },
  {
    id: 5,
    title: 'Treatment Sepatu Anak',
    description: 'Kami akan membahas cara membersihkan dan merawat sepatu anak dengan mudah dan aman. Anda akan belajar langkah-langkah sederhana yang bisa diterapkan pada sepatu anak untuk menjaga kebersihannya.',
    imageUrl: sepatuImageAnak,
  },
];

const Kursus = () => {
  return (
    <div className="bg-white min-h-screen container mx-auto p-4">
      <header className="flex items-center justify-center mb-8">
        <div className="w-1/2">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-64 object-cover"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
            }}
          />
        </div>
        <div className="w-1/2 text-center">
          <h2 className="text-black text-4xl font-extrabold">MAKE YOUR SHOES CLEAN!!</h2>
        </div>
      </header>

      {/* Courses Section */}
      <section>
        <h1 className="text-black text-3xl font-bold mb-6">Courses</h1>
        <div className="space-y-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white shadow-md rounded-lg border border-gray-200 p-6 flex items-center space-x-6">
              <img src={course.imageUrl} alt="Course Thumbnail" className="w-50 h-40 rounded-md object-cover" />
              <div>
                <h2 className="text-black text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <button className="w-full bg-blue-700 text-white px-3 py-1 rounded-md mt-5">
                  Tonton video
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Kursus;
