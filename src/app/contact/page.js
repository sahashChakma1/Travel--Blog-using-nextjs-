"use client";

import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const fullPhone = `${form.countryCode} ${form.phone}`;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: fullPhone,
        message: form.message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setForm({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
    } else {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-[#FAF9F7] text-gray-900 pt-16">
      {/* Hero Section */}
      <div
        className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/Home.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-5xl font-serif text-white mb-4 tracking-wide">
            Let’s Begin Your Story
          </h1>
          <p className="text-lg text-gray-200">
            Every journey starts with a conversation. Reach out — we’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif text-green-950">
            Write to Us
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Tell us what kind of journey you’re dreaming about — and we’ll help you make it real.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-green-800 outline-none"
                  required
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                  placeholder="1234567890"
                  pattern="[0-9]{5,15}"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Tell Us Your Story
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                placeholder="I’d love to experience Mizoram’s artisan trails..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-800 transition-transform transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-6 text-center text-sm text-gray-600">{status}</p>}
        </div>

        {/* Location / Additional Info */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-serif font-semibold mb-2 text-green-950">Our Base</h3>
          <p className="text-gray-700 mb-2">Nestled in the heart of Mizoram — where every path leads to a story.</p>
          <p className="text-gray-700 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-700">✉️ hello@muromuri.com</p>
        </div>
      </div>

      {/* Visual Divider */}
      <div className="relative w-full h-[300px] mt-12 overflow-hidden">
        <Image
          src="/images/destination1.jpg"
          alt="Hills of Mizoram"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-serif">
            “Travel not to escape, but to connect.”
          </h2>
        </div>
      </div>
    </section>
  );
};
export default Contact;
