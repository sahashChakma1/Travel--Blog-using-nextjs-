"use client";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const posts = [
    {
      image: "/images/post1.jpg",
      title: "What a Morning in Aizawl Feels Like",
      category: "Culture",
      link: "/posts/aizawl-morning",
    },
    {
      image: "/images/post2.jpg",
      title: "A Day with a Local Artisan",
      category: "People",
      link: "/posts/local-artisan",
    },
    {
      image: "/images/post3.jpg",
      title: "The Songs that Keep Mizoram Alive",
      category: "Tradition",
      link: "/posts/mizo-songs",
    },
  ];

  const images = [
    "/images/Home.JPG",
    "/images/IMG1.JPG",
    "/images/img.JPG",
    "/images/IMG2.JPG",
    "/images/IMG3.JPG",
  ];

  return (
    <div className="bg-[#f9f7f4] text-gray-900 font-sans">
      {/* Banner Section */}
      <div
        className="relative w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: 'url("/images/Home.JPG")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white drop-shadow-lg">
            Immerse. Connect. <span className="text-[#d2b48c]">Belong.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mt-6 max-w-2xl mx-auto leading-relaxed">
            Travel through stories, cultures, and the quiet rhythm of the hills.
          </p>
        <Link
  href="/destinations"
  className="inline-block mt-10 px-8 py-3 bg-[#ebf8f4] text-black rounded-full hover:bg-[#1f5a27] transition-all duration-300"
>
  Explore Journeys
</Link>
        </div>
      </div>

      {/* Core Philosophy */}
      <section className="px-6 md:px-12 lg:px-24 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-10 text-gray-800">
          Find Meaning in Every Journey
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
          Muromuri curates small-group journeys across the hills of Northeast India —
          where you don’t just see a place, you become part of its story. 
          Wake up in a Mizo home, share tea with your hosts, and listen to
          stories passed down for generations. These are not trips — they’re
          connections waiting to happen.
        </p>
      </section>

      {/* Journeys Section */}
      <section className="bg-[#ede9e3] py-20 px-6 md:px-12 lg:px-24 text-center">
        <h3 className="text-3xl md:text-4xl font-serif mb-12 text-gray-800">
          Journeys Crafted with Intention
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              src: "/images/destination1.jpg",
              title: "Life in Aizawl’s Morning Mist",
              desc: "Walk through fog-draped streets as the city wakes to the rhythm of song and prayer.",
            },
            {
              src: "/images/destination2.jpg",
              title: "The Bamboo Trail",
              desc: "Follow artisans who turn forest and fire into craft and culture.",
            },
            {
              src: "/images/destination3.jpg",
              title: "Stories of the Hills",
              desc: "Sit by the hearth, share laughter, and taste the essence of community.",
            },
            {
              src: "/images/destination4.jpg",
              title: "Beyond the Valleys",
              desc: "Discover the spirit of Northeast India through people, not checklists.",
            },
          ].map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={destination.src}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold font-serif mb-3 text-gray-900">
                  {destination.title}
                </h4>
                <p className="text-gray-700">{destination.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/img.JPG"
            alt="Muromuri Founder Surita"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif mb-6 text-gray-800">
            The Heart Behind Muromuri
          </h2>
          <p className="mb-4 text-gray-700">
            I’m <span className="font-semibold">Surita</span>, the storyteller behind Muromuri — born in the hills and shaped by their stories.
          </p>
          <p className="mb-4 text-gray-700">
            Muromuri began with a simple idea: to create journeys that connect people, not just places.
          </p>
          <p className="mb-4 text-gray-700">
            Every trip we design brings travelers closer to local lives, cultures, and crafts — through warmth, respect, and shared moments.
          </p>
          <p className="mb-8 text-gray-700">
            We believe slow travel isn’t about doing less — it’s about feeling more.
          </p>
          <Link href="/about">
            <button className="bg-[#2f3e34] text-white px-8 py-3 rounded-full hover:bg-[#3f4e43] transition duration-300">
              Our Story →
            </button>
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#f4f2ee]">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-gray-800">
          Stories from the Hills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm text-[#3f4e43] uppercase tracking-wide mb-2">
                  {post.category}
                </p>
                <h3 className="text-xl font-serif mb-4 text-gray-900">
                  {post.title}
                </h3>
                <Link
                  href={post.link}
                  className="text-[#2f3e34] font-semibold hover:underline"
                >
                  Read Story →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Home.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-white px-6">
          <h2 className="text-4xl font-serif mb-4">
            Let’s Begin Your Story
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-200">
            Have questions or want to join our next journey?{" "}
            <a href="/contact" className="text-[#d2b48c] underline">
              Contact us
            </a>{" "}
            — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-[#faf9f7] py-20 text-center">
        <h3 className="text-2xl font-serif mb-8 text-gray-800">
          From the Hills to Your Feed
        </h3>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-md group"
            >
              <Image
                src={img}
                alt={`Instagram ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-[#ede9e3] text-center py-20 px-6">
        <h3 className="text-3xl font-serif mb-4 text-gray-800">
          Join the Muromuri Circle
        </h3>
        <p className="text-lg mb-8 max-w-xl mx-auto text-gray-700">
          Be the first to hear about upcoming journeys, behind-the-scenes stories,
          and the people who make Muromuri what it is.
        </p>
        <button className="bg-[#2f3e34] text-white py-3 px-8 rounded-full text-lg hover:bg-[#3f4e43] transition">
          Subscribe
        </button>
      </section>
    </div>
  );
};
export default HomePage;
