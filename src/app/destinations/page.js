"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Destinations = () => {
  const sliderRef = useRef(null);

  const sliderImages = [
    { src: "/images/Home.JPG", title: "Journeys Through the Hills", alt: "Misty mountain view in Northeast India" },
    { src: "/images/img.JPG", title: "Stories Rooted in Culture", alt: "Local crafts and cultural expression" },
    { src: "/images/IMG1.JPG", title: "Where Travel Meets Connection", alt: "Traveler connecting with locals in the hills" },
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      <Head>
        <title>Destinations | Muromuri</title>
        <meta
          name="description"
          content="Explore immersive journeys through Mizoram, Meghalaya, and Nagaland — curated by Muromuri for mindful travelers."
        />
      </Head>

      <section className="min-h-screen bg-[#F9F7F3] text-gray-900">
        {/* 🏞 Hero Section */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <Slider ref={sliderRef} {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative w-full h-[500px] md:h-[600px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                  <motion.h1
                    className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center px-6"
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

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            aria-label="Previous"
            className="absolute top-1/2 left-6 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all z-10"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next"
            className="absolute top-1/2 right-6 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all z-10"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* 🌾 Main Content */}
        <main className="container mx-auto px-6 py-16">
          {/* Intro Text */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
              Explore the Stories of the Hills
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {`Each Muromuri journey unfolds across the hills, valleys, and villages of Northeast India. 
              We don’t just take you to places — we invite you into stories, shared over hearths, trails, and timeless songs.`}
            </p>
          </motion.div>

          {/* ✨ Featured Destinations */}
          <motion.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-semibold text-center mb-10 text-green-950 tracking-tight">
              Featured Journeys
            </h3>
            <div className="flex flex-wrap gap-10 justify-center">
              {[
                {
                  title: "Aizawl, Mizoram",
                  img: "/images/Mizoram.png",
                  alt: "Panoramic view of Aizawl city in Mizoram hills",
                  link: "/destinations/aizawl",
                  description:
                    "Walk through the layered hills of Mizoram — meet artisans, share stories over tea, and feel the rhythm of life in the clouds.",
                },
                {
                  title: "Sohra, Meghalaya",
                  img: "/images/Meghalaya.png",
                  alt: "Living root bridge surrounded by lush greenery in Meghalaya",
                  link: "/destinations/sohra",
                  description:
                    "Where mist, waterfalls, and roots intertwine. Discover Meghalaya’s living bridges and its quiet strength of community.",
                },
                {
                  title: "Mon, Nagaland",
                  img: "/images/Nagaland.png",
                  alt: "Traditional Naga village and cultural symbols in Mon district",
                  link: "/destinations/mon",
                  description:
                    "In Nagaland’s remote frontiers, tradition lives through tattoos, music, and warmth. Travel where stories are sacred.",
                },
              ].map((destination, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-500 w-[320px]"
                  whileHover={{ y: -6 }}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={destination.img}
                      alt={destination.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-semibold mb-3 text-green-950">
                      {destination.title}
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {destination.description}
                    </p>
                    <a
                      href={destination.link}
                      className="text-green-800 font-semibold hover:text-green-600 transition-colors"
                    >
                      Discover More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🌿 Travel Philosophy */}
          <motion.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-semibold mb-10 text-center text-green-950">
              Our Way of Travel
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Travel Slow", tip: "We take time to listen, learn, and immerse — because the best stories can’t be rushed." },
                { title: "Stay with Locals", tip: "Experience community-run stays where every smile, meal, and story feels like home." },
                { title: "Respect & Reciprocity", tip: "Travel isn’t about taking — it’s about sharing. We believe in giving back to the people and lands that host us." },
                { title: "Curated Comfort", tip: "Small groups, seamless journeys, and thoughtful details for travelers who value experience over luxury." },
                { title: "Cultural Immersion", tip: "From folk songs to handwoven textiles, every experience connects you to the spirit of the Northeast." },
                { title: "Sustainability First", tip: "We partner with locals, reduce footprints, and ensure tourism uplifts — not disrupts — communities." },
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#F5F3EF] border border-gray-100 rounded-2xl shadow-sm hover:shadow-md p-8 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <h4 className="text-xl font-semibold text-green-900 mb-3">
                    {tip.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{tip.tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ✉️ Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg mb-6 text-gray-700">
              Ready to begin your story from the hills?
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-950 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300"
            >
              Plan Your Journey
            </a>
          </motion.div>
        </main>
      </section>
    </>
  );
};

export default Destinations;
