"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ fontClassName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavShrunk, setIsNavShrunk] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setIsNavShrunk(true);
      } else {
        setIsNavShrunk(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/destinations", label: "Destinations" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: isNavShrunk ? "0.5rem" : "1rem",
        paddingBottom: isNavShrunk ? "0.5rem" : "1.25rem",
        boxShadow: isNavShrunk ? "0 2px 8px rgba(0,0,0,0.1)" : "0 4px 16px rgba(0,0,0,0.15)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${fontClassName} bg-white w-full fixed top-0 z-50`}

    >
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-lg md:text-xl font-bold">MuroMuri</h1>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded text-sm transition-transform transform hover:scale-105 ${
                isActive(href)
                  ? "text-white bg-green-900 shadow-md"
                  : "text-gray-800 hover:text-black hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-green-900 text-lg">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-600 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="hover:text-blue-600 transition" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="hover:text-red-600 transition" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
    
     {/* Mobile Menu */}
   <AnimatePresence>
  {isMenuOpen && (
    <>
      {/* BACKDROP OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-40"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE SIDE NAV (White Background) */}
      <motion.nav
        id="nav-menu"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white text-black shadow-xl z-50 flex flex-col justify-between p-6"
      >
        {/* Menu Header */}
        <div>
          <h2 className="text-xl font-semibold mb-6">MuroMuri</h2>
          <ul>
         {navLinks.map(({ href, label }, index) => (
           <li key={href}>
            <Link
              href={href}
              onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded text-base font-medium ${
                  isActive(href)
                    ? "text-green-900"
                    : "text-gray-800 hover:text-black hover:bg-gray-100"
                }`}
            >
        {label}
      </Link>
      {index !== navLinks.length - 1 && (
        <hr className="border-t border-gray-300 my-2" />
      )}
    </li>
      ))}
    </ul>
        </div>

        {/* Social Icons at Bottom */}
<div className="mt-8 flex justify-center space-x-4 text-green-900 text-xl">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <FaInstagram className="hover:text-pink-600 transition" />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <FaFacebookF className="hover:text-blue-600 transition" />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <FaYoutube className="hover:text-red-600 transition" />
  </a>
</div>
      </motion.nav>
    </>
  )}
</AnimatePresence>
    </motion.header>
  );
}
