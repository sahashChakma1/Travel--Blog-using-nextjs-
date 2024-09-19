"use client"; // Ensure this is present at the top

import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-off-white0 text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-6 text-center">
          Have questions or want to share your travel experiences with us? Feel free to reach out! We love hearing from fellow travelers.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-center">
          You can contact us via email or use the contact form below.
        </p>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-950 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <p className="text-lg leading-relaxed mb-4">
            123 Travel Street, Adventure City, AT 12345
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Phone: (123) 456-7890
          </p>
          <p className="text-lg leading-relaxed">
            Email: contact@beyondthehills.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
