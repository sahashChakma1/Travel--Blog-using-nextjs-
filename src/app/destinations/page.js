"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Destinations = () => {
  const sliderRef = useRef(null);

  const sliderImages = [
    { src: "/images/Home.JPG", title: "Explore the World" },
    { src: "/images/img.JPG", title: "Discover Hidden Gems" },
    { src: "/images/IMG1.JPG", title: "Your Next Adventure" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const goToPrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="min-h-screen bg-off-white text-gray-900">

      {/* ✅ Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="relative w-full h-[500px]">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
                  {image.title}
                </h1>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Arrows */}
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

      {/* ✅ Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <div className="mb-12 text-center">
          <p className="text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
            {`Discover the world's most breathtaking destinations. Whether you're dreaming of tropical beaches, cultural cities, or serene landscapes, our guides are here to inspire and guide your next adventure.`}
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Destinations</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              {
                title: "Paris, France",
                img: "/images/Paris.png",
                link: "/destinations/paris",
                description: "Explore the City of Light, famous for its art, architecture, and romance.",
              },
              {
                title: "Kyoto, Japan",
                img: "/images/Kyoto.png",
                link: "/destinations/kyoto",
                description: "Experience the timeless beauty of Kyoto, from its temples to traditional tea houses.",
              },
              {
                title: "Bali, Indonesia",
                img: "/images/Bali.png",
                link: "/destinations/bali",
                description: "A tropical paradise with stunning beaches, vibrant culture, and lush landscapes.",
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 w-[300px]"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={destination.img}
                    alt={destination.title}
                    fill
                    className="object-cover transition-opacity opacity-100 hover:opacity-90 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <a
                    href={destination.link}
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Travel Tips Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Travel Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pack Smart",
                tip: "Always pack versatile clothing and essentials. Roll clothes to save space and use packing cubes for organization.",
              },
              {
                title: "Stay Connected",
                tip: "Get a local SIM card or use an eSIM for reliable internet and easier navigation during your trip.",
              },
              {
                title: "Respect Local Culture",
                tip: "Learn basic greetings, local customs, and dress modestly when required. Respect goes a long way.",
              },
              {
                title: "Stay Safe",
                tip: "Keep digital copies of important documents and avoid unsafe neighborhoods, especially at night.",
              },
              {
                title: "Budget Wisely",
                tip: "Use apps to track expenses and plan daily spending. Look for deals on attractions and local transport.",
              },
              {
                title: "Try Local Food",
                tip: "Step out of your comfort zone and experience authentic flavors. Street food is often delicious and cheap!",
              },
            ].map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 border hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
