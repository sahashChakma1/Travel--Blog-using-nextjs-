"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import "glightbox/dist/css/glightbox.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const sliderRef = useRef(null);

  const sliderImages = [
    { src: "/images/Home.JPG", title: "The Story Behind Muromuri" },
    { src: "/images/img.JPG", title: "Rooted in the Hills" },
    { src: "/images/IMG1.JPG", title: "Where Journeys Find Meaning" },
  ];

  const galleryImages = [
    { src: "/images/Home.JPG", title: "The Hills We Call Home" },
    { src: "/images/img.JPG", title: "Stories in Every Corner" },
    { src: "/images/IMG1.JPG", title: "Shared Moments" },
    { src: "/images/IMG2.JPG", title: "Craft and Culture" },
    { src: "/images/IMG3.JPG", title: "Slow Journeys" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const goToPrevious = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  useEffect(() => {
    let lightbox;
    import("glightbox").then((module) => {
      lightbox = module.default({
        selector: ".glightbox-gallery",
      });
    });
    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#F9F7F3] text-gray-900">
      {/* 🏔 Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="relative w-full h-[500px]">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover brightness-90"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {image.title}
                </motion.h1>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-6 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-6 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all z-10"
          aria-label="Next image"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {/* 🌸 Introduction */}
      <motion.div
        className="text-center px-6 py-20 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
          Our Story
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
          Muromuri was born out of a longing — to travel slowly, to listen deeply, and to belong wherever our feet touch the earth. 
          What began as a personal journey soon became a collective one: a space where travelers, artisans, and locals share stories 
          that breathe life into the hills of Northeast India.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Every journey we curate is a bridge between people woven with warmth, curiosity, and respect for the culture that holds us.
        </p>
      </motion.div>

      {/* 🌿 Founder Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="relative w-64 h-64 flex-shrink-0">
          <Image
            src="/images/Home.JPG"
            alt="Surita – Founder of Muromuri"
            fill
            className="object-cover rounded-full shadow-xl border-4 border-[#EDEAE3]"
          />
        </div>
        <div className="max-w-xl">
          <h3 className="text-3xl font-bold mb-4 text-green-950">Meet Surita</h3>
          <p className="text-lg text-gray-700 mb-4">
            I’m <span className="font-semibold text-green-900">Surita</span> — a traveler, storyteller, and the heart behind Muromuri. 
            Growing up amidst the hills taught me that stories aren’t found in destinations, but in the people who live them. 
            Through Muromuri, I wanted to share that feeling — the stillness, the warmth, and the sense of belonging that travel can bring.
          </p>
          <p className="text-lg text-gray-700">
            Every itinerary I create is an invitation — to slow down, listen, and connect meaningfully with the world and with yourself.
          </p>
        </div>
      </motion.div>

      {/* 📸 Gallery Section */}
      <motion.div
        className="py-16 bg-gradient-to-b from-[#F9F7F3] to-[#EFEAE4]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center text-green-950 mb-10">
          Glimpses from the Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group h-64 rounded-2xl overflow-hidden shadow-lg">
              <a href={image.src} className="glightbox-gallery" data-glightbox={`title: ${image.title}`}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </div>
              </a>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🌾 Mission Section */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6 text-green-950">Our Philosophy</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          At Muromuri, travel isn’t about ticking off places — it’s about immersing yourself in them. 
          We believe in journeys that give more than they take, that build empathy, and that leave footprints of kindness.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Our hope is to bring travelers closer to communities, traditions, and ways of life that remind us how beautifully connected we all are.
        </p>
      </motion.div>

      {/* 💌 Contact CTA */}
      <motion.div
        className="text-center py-16 bg-gradient-to-t from-[#EDEAE3] to-[#F9F7F3]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6 text-green-950">
          Come, Let’s Begin a New Story
        </h2>
        <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          Whether you’re curious about our journeys or simply want to share a story, we’d love to hear from you.  
          Reach out and let’s start planning something meaningful together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-950 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default About;
