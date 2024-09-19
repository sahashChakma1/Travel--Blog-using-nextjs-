import React from 'react';

const Destinations = () => {
  return (
    <section className="min-h-screen bg-off-white text-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      <div className="relative mb-12">
        <img
          src="/images/IM1.JPG" // Replace with the path to your image
          alt="Travel Destinations"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">Destinations</h1>
        </div>
      </div>
        {/* Introduction */}
        <div className="mb-12 text-center">
          <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Discover some of the most amazing destinations around the world. From tropical beaches to bustling cities, we cover it all. Our destination guides are designed to help you plan your next getaway.
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Destinations</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="bg-off-white rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src="/images/Paris.png" // Replace with the path to your image
                alt="Paris"
                className="w-full h-40 object-cover transition-opacity opacity-100 hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Paris, France</h3>
                <p className="text-gray-600 mb-4">
                  Experience the romance and culture of Paris. Explore the Eiffel Tower, Louvre Museum, and the charming streets of Montmartre.
                </p>
                <a href="/destinations/paris" className="text-green-950 hover:text-green-700 transition-colors duration-300 font-semibold">
                  Learn more
                </a>
              </div>
            </div>

            <div className="bg-off-white rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src="/images/Kyoto.png" // Replace with the path to your image
                alt="Kyoto"
                className="w-full h-40 object-cover transition-opacity opacity-100 hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Kyoto, Japan</h3>
                <p className="text-gray-600 mb-4">
                  Discover the beauty of traditional Japanese culture in Kyoto. Visit stunning temples, gardens, and experience authentic tea ceremonies.
                </p>
                <a href="/destinations/kyoto" className="text-green-950 hover:text-green-700 transition-colors duration-300 font-semibold">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Tips */}
        <div className="bg-off-whiterounded-lg border border-gray-200 shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-bold mb-6">Travel Tips</h2>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-4">Pack light and smart: Always bring versatile clothing and essential items for your destination.</li>
            <li className="mb-4">Stay connected: Keep your phone charged and consider getting a local SIM card for data.</li>
            <li className="mb-4">Respect local customs: Familiarize yourself with cultural norms and etiquette.</li>
            <li className="mb-4">Plan ahead: Research your destinations and plan your itinerary to make the most of your trip.</li>
          </ul>
        </div>

        {/* User Reviews */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">What Our Travelers Say</h2>
          <div className="space-y-6">
            <div className="bg-off-white rounded-lg border border-gray-200 shadow-lg p-6">
              <p className="text-gray-700 mb-4">
                "The trip to Paris was incredible! The city is full of beautiful landmarks and amazing food. Highly recommend!"
              </p>
              <p className="font-semibold">- Alex Johnson</p>
            </div>

            <div className="bg-off-white rounded-lg border border-gray-200 shadow-lg p-6">
              <p className="text-gray-700 mb-4">
                "Kyoto is a must-visit for anyone interested in traditional Japanese culture. The temples and gardens are breathtaking."
              </p>
              <p className="font-semibold">- Maria Lopez</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg mb-4">Want to stay updated on the latest travel destinations and tips? Subscribe to our newsletter!</p>
          <a href="/subscribe" className="bg-green-950 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
