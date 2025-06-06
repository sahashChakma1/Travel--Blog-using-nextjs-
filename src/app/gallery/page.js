"use client";
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GLightbox from 'glightbox';
import Image from 'next/image'; // Already imported, now used
import 'glightbox/dist/css/glightbox.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const sliderRef = useRef(null);

  const sliderImages = [
    { src: "/images/Home.jpg", title: 'My Gallery' },
    { src: "/images/img.jpg", title: 'Image 2' },
    { src: "/images/IMG1.jpg", title: 'Image 3' },
  ];

  const galleryImages = [
    { src: "/images/Home.jpg", title: 'About Us' },
    { src: "/images/img.jpg", title: 'Image 2' },
    { src: "/images/IMG1.jpg", title: 'Image 3' },
    { src: "/images/IMG2.jpg", title: 'Image 4' },
    { src: "/images/IMG3.jpg", title: 'Image 5' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
  let lightbox;

  (async () => {
    const GLightbox = (await import('glightbox')).default;
    lightbox = GLightbox({
      selector: '.glightbox-gallery',
    });
  })();

  return () => {
    if (lightbox) {
      lightbox.destroy();
    }
  };
}, []);

  return (
    <section className="bg-off-white text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="w-full h-[500px] relative">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                priority={index === 0} // Prioritize first image for LCP
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">{image.title}</h1>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Gallery Section */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group h-64">
              <a href={image.src} className="glightbox-gallery" data-glightbox={`title: ${image.title}`}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-bold">
                  {image.title}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center py-12 px-6 bg-off-white">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        {/* Add contact details here if needed */}
      </div>
    </section>
  );
};

export default About;