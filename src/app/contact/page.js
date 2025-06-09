"use client";

import React, { useState } from "react";

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
    <section className="min-h-screen bg-off-white0 text-gray-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-6 text-center">
          Have questions or want to share your travel experiences with us?
        </p>
        <p className="text-lg leading-relaxed mb-8 text-center">
          You can contact us via email or use the contact form below.
        </p>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <div className="flex space-x-2">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
                  required
                >
                  <option value="+91">🇮🇳 +91 (India)</option>
                  <option value="+1">🇺🇸 +1 (USA)</option>
                  <option value="+44">🇬🇧 +44 (UK)</option>
                  <option value="+61">🇦🇺 +61 (Australia)</option>
                  <option value="+81">🇯🇵 +81 (Japan)</option>
                  <option value="+49">🇩🇪 +49 (Germany)</option>
                  <option value="+33">🇫🇷 +33 (France)</option>
                  <option value="+971">🇦🇪 +971 (UAE)</option>
                  <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                  <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="1234567890"
                  pattern="[0-9]{5,15}"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-950 text-white font-semibold rounded-md hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
        </div>

        {/* Additional Info */}
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
