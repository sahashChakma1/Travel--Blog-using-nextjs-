"use client";
import React from "react";
import Image from "next/image";

const Destinations = () => {
  return (
    <section className="min-h-screen bg-off-white0 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative mb-12 h-48 sm:h-64 md:h-80 lg:h-96">
          <Image
            src="/images/IMG1.JPG"
            alt="Travel Destinations"
            fill
            className="object-cover rounded-lg shadow-lg transition-transform hover:scale-110 duration-500"
            style={{ zIndex: 0 }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
              Destinations
            </h1>
          </div>
        </div>

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
                    className="text-green-950 hover:text-green-700 transition-colors duration-300 font-semibold"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6 mb-12">
          <h2 className="text-4xl font-bold mb-6">Travel Tips</h2>
          <ul className="list-disc list-inside text-lg">
            <li>{`Pack light and smart — bring only what's essential.`}</li>
            <li>{`Always keep digital and printed copies of important documents.`}</li>
            <li>{`Respect local cultures and customs to enrich your experience.`}</li>
            <li>{`Try to learn a few words of the local language — it goes a long way.`}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
