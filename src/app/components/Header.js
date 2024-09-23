"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header({ fontClassName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavShrunk, setIsNavShrunk] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();

  const isActive = useCallback((path) => pathname === path, [pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsNavShrunk(scrollTop > lastScrollTop && scrollTop > 40);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <header
      className={`${fontClassName} bg-hue-green w-full transition-all duration-300 ease-in-out ${
        isNavShrunk ? 'py-2 md:py-2.5 shadow-md' : 'py-3 md:py-4 shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between px-3 md:px-5 lg:px-7 transition-all duration-300 ease-in-out max-w-7xl mx-auto">
        {/* Logo Image */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={95}
              height={19}
              className={`transition-all duration-300 ease-in-out ${isNavShrunk ? 'h-5 md:h-6' : 'h-6 md:h-7'}`}
            />
          </Link>
        </div>

        {/* Burger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-green-900 focus:outline-none transition-colors duration-300 ease-in-out"
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav id="nav-menu" className="hidden md:block md:static md:flex md:items-center md:space-x-5 lg:space-x-7">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 lg:space-x-7 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative block px-3 py-1.5 transition-all duration-300 ease-in-out rounded overflow-hidden ${
                    isActive(link.href)
                      ? 'text-white'
                      : 'text-white hover:text-green-900 hover:scale-105'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-800 transition-all duration-300 ease-in-out origin-left transform ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar for Smaller Screens */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-60 h-full bg-white z-50 p-5 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-3 right-3 text-gray-900 focus:outline-none transition-colors duration-300 ease-in-out"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="flex flex-col space-y-3 text-base font-medium mt-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className={`relative block px-3 py-2 transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive(link.href) ? 'text-green-950' : 'text-gray-900 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-800 transition-all duration-300 ease-in-out origin-left transform ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}