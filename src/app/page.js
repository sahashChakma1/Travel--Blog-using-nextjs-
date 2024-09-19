import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const posts = [
    {
      image: '/images/post1.jpg',
      title: 'Post Title 1',
      category: 'Category 1',
      link: '/posts/post1',
    },
    {
      image: '/images/post2.jpg',
      title: 'Post Title 2',
      category: 'Category 2',
      link: '/posts/post2',
    },
    {
      image: '/images/post3.jpg',
      title: 'Post Title 3',
      category: 'Category 3',
      link: '/posts/post3',
    },
  ];
  const images = [
    "/images/Home.jpg",
    "/images/Home.jpg",
    "/images/IMG1.jpg",
   "/images/img.jpg",
    "/images/Home.jpg",
  ];

  return (
    <div>
      {/* Banner Section */}
      <div
        className="home-banner text-center py-20 bg-cover bg-center mb-20"
        style={{ backgroundImage: 'url("/images/Home.jpg")' }}
      >
        <h1 className="text-5xl font-bold text-white">
          JOURNEY, IMAGINE, <span className="text-green-400">DISCOVER</span>
        </h1>
        <p className="text-xl text-white mt-6">Wander, Experience, Enjoy</p>
        <Link
          href="/destinations"
          className="inline-block mt-8 px-8 py-3 border-2 border-white text-white bg-transparent hover:bg-green-800 hover:border-green-800 transition-all duration-300 transform hover:scale-105"
        >
          Start Exploring
        </Link>
      </div>

      {/* Content Section Below Banner */}
      <div className="content-section px-6 md:px-12 py-16 text-center mb-20">
        <h2 className="text-4xl font-semibold mb-10">Discover Your Next Adventure</h2>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          Our travel blog is your gateway to discovering the world's most breathtaking destinations.
          Whether you're planning a weekend getaway or a month-long expedition, we've got you covered with
          expert tips, travel guides, and insider advice. Start exploring and let your wanderlust take flight!
        </p>

        {/* Featured Destinations */}
        <div className="featured-destinations py-12 mb-20">
          <h3 className="text-3xl font-semibold mb-8">Featured Destinations</h3>
          <div className="destination-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Destination Items */}
            {[
              { src: '/images/destination1.jpg', title: "Exploring Bali’s Hidden Waterfalls", desc: "Discover the hidden gems of Bali’s waterfalls." },
              { src: '/images/destination2.jpg', title: "Top 10 Destinations in Japan", desc: "Explore the top destinations in Japan for a cultural experience." },
              { src: '/images/destination3.jpg', title: "A Guide to the Best Hikes in Nepal", desc: "Find the best hikes in Nepal for your next adventure." },
              { src: '/images/destination4.jpg', title: "Discover the Beauty of Iceland", desc: "Experience the stunning landscapes and natural wonders of Iceland." },
            ].map((destination, index) => (
              <div key={index} className="destination-item text-left transform transition-transform duration-300 hover:scale-105">
                <div className="relative h-60 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={destination.src}
                    alt={destination.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">{destination.title}</h4>
                <p className="text-gray-700">{destination.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <h2 className="text-4xl font-bold mb-12 text-center lg:text-left">Thanks For Looking!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px]">
              <Image
                src="/images/img.jpg"
                alt="Traveler in front of a Japanese castle"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-4">I'm David Leiter, the guy behind this website...</p>
            <p className="mb-4">I started this travel blog in 2019...</p>
            <p className="mb-4">Together, we've done some <span className="text-orange-500">bucket list hikes</span>...</p>
            <p className="mb-4">I've worked with and been featured by BBC Travel, NBC News, Time...</p>
            <p className="mb-6">I haven't been everywhere, but it's on my list...</p>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">READ MORE →</button>
          </div>
        </div>

        {/* Recent Posts and Aside Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Recent Posts */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-lg mb-6">
                  <Image src={post.image} alt={post.title} width={500} height={300} />
                  <div className="p-4">
                    <p className="text-orange-500 text-sm mb-2">{post.category}</p>
                    <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                    <Link href={post.link} className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aside Section */}
          <aside className="bg-white shadow-lg p-6 rounded-lg text-center mb-20">
            <Image
              src="/images/Home.jpg"
              alt="David and Intan"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">Hey there! I'm David Leiter</h3>
            <p className="mt-4">An American who's been traveling the world full-time for 8 years now.</p>
            <p className="mt-4">My wife Intan and I are based in Bali...</p>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </aside>
        </div>

        <div className="relative w-screen h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/Home.jpg')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
    <h1 className="text-white text-4xl font-bold">Get In Touch</h1>
    <p className="text-white text-lg mt-4">
      Feel free to <a href="#contact" className="text-orange-500 underline">contact me</a> if you have travel questions, comments, or suggestions!
    </p>
    <p className="text-white text-lg mt-2">I'll try to get back to you!</p>
    <div className="mt-6">
      <img src="/path-to-paper-plane-icon.svg" alt="Paper Plane" className="w-8 h-8" />
    </div>
  </div>
</div>


<div className="bg-white py-6">
  <h2 className="text-center font-bold text-lg mb-4">Instagram</h2>
  <div className="flex flex-wrap gap-4 justify-center px-4">
    {images.map((img, idx) => (
      <div key={idx} className="relative w-72 h-72 flex-shrink-0 overflow-hidden">
        <div className="relative w-full h-full group">
          {/* Image with hover effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${img})` }}
          />
          {/* Hover effect with opacity and border */}
          <div className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    ))}
  </div>
</div>



        {/* Call-to-Action */}
        <div className="call-to-action mt-20 text-center bg-green-100 p-12 rounded-lg">
          <h3 className="text-3xl font-semibold mb-4">Ready to Start Your Adventure?</h3>
          <p className="text-xl mb-8">Sign up for our newsletter to receive the latest updates, travel tips, and exclusive offers!</p>
          <button className="cta-button bg-green-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
