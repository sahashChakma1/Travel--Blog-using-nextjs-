"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "glightbox/dist/css/glightbox.min.css";

const Gallery = () => {
  const galleryImages = [
    { src: "/images/Home.JPG", title: "Morning Tea in Aizawl" },
    { src: "/images/img.JPG", title: "The Road to Dampa" },
    { src: "/images/IMG1.JPG", title: "Evening Fire by the Hills" },
    { src: "/images/IMG2.JPG", title: "Handwoven Stories" },
    { src: "/images/IMG3.JPG", title: "Echoes of Bamboo and Song" },
  ];

  useEffect(() => {
    let lightbox;
    (async () => {
      const GLightbox = (await import("glightbox")).default;
      lightbox = GLightbox({ selector: ".glightbox-gallery" });
    })();
    return () => lightbox && lightbox.destroy();
  }, []);

  return (
    <section className="bg-[#f9f7f4] text-gray-900">
      {/* Gallery Grid */}
<div className="pt-32 px-10 md:px-12 lg:px-24">
  <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-10">
    A Glimpse into Muromuri Journeys
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {galleryImages.map((image, index) => (
      <div key={index} className="relative group h-72">
        <a
          href={image.src}
          className="glightbox-gallery"
          data-glightbox={`title: ${image.title}`}
        >
          <Image
            src={image.src}
            alt={image.title}
            fill
            className="object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-70 transition-opacity rounded-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-medium font-serif px-4">
            {image.title}
          </div>
        </a>
      </div>
    ))}
  </div>
</div>
      {/* Contact Section */}
      <div className="bg-[#ede9e3] text-center py-16 px-6">
        <h2 className="text-3xl font-serif mb-6 text-gray-800">
          Join a Journey
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          If these moments speak to you — come travel with us. Experience
          Northeast India through stories, connection, and community.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#2f3e34] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3f4e43] transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Gallery;
