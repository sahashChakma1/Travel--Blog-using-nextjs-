"use client";
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const sliderRef = useRef(null);

  const sliderImages = [
    { src: "/images/Home.jpg", title: 'About Us' },
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

  // Initialize Glightbox for the gallery
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox-gallery',
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section className="bg-off-white text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="w-full h-[500px] relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
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

      {/* Introduction */}
      <div className="text-center mb-16 px-6 py-12">
        <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          Welcome to our travel blog! We are passionate travelers who love to explore the beauty of the world and share our experiences with you. Our journey began with a simple love for adventure and has grown into a mission to inspire others to explore and appreciate the diverse cultures and landscapes around the globe.
        </p>
      </div>

      {/* Personal Background */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="/images/Home.jpg"
            alt="Profile"
            className="w-full h-64 object-cover rounded-full shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg leading-relaxed mb-6">
            We are [Your Name] and [Partner's Name], two avid explorers with a deep love for travel. With backgrounds in [Your Background], we bring a unique perspective to our travel experiences. Our goal is to share our adventures, tips, and recommendations to help you make the most of your travels.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Travel Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group">
              <a href={image.src} className="glightbox-gallery" data-glightbox={`title: ${image.title}`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
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

      {/* Mission Statement */}
      <div className="bg-off-white rounded-lg border border-gray-200 shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to inspire and inform travelers by sharing detailed guides, personal experiences, and practical tips. We believe that travel enriches the soul and fosters a greater understanding of the world. Through our blog, we hope to encourage you to embark on your own adventures and explore the wonders of our planet.
        </p>
      </div>

      {/* Contact Information */}
      <div className="text-center py-12 px-6 bg-off-white">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
        <a href="/contact" className="bg-green-950 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default About;
