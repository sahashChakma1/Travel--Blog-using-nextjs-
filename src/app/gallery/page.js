import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/images/Home.jpg', alt: 'Mayan pyramid' },
    { src: '/images/img.jpg', alt: 'Volcanic landscape' },
    { src: '/images/IMG1.jpg', alt: 'Mountain temple' },
    { src: '/images/image4.jpg', alt: 'Desert landscape' },
    { src: '/images/image5.jpg', alt: 'Machu Picchu' },
    { src: '/images/image6.jpg', alt: 'Another view of Machu Picchu' },
    { src: '/images/image7.jpg', alt: 'Flower field' },
    { src: '/images/image8.jpg', alt: 'Exotic bird' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <Image
          src="/images/hero-image.jpg"  // Ensure the image exists at this path
          alt="Gallery Hero"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">GALLERY</h1>
            <p className="text-lg mt-2">Some pictures from our travels</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
