import React from 'react';

export default function Footer({ fontClassName }) {
  return (
    <footer className={`${fontClassName} bg-neutral-900 text-gray-400 w-full flex flex-col items-center p-4 sm:p-6 lg:p-8`}>
      {/* Social Media Links */}
      <div className="flex space-x-4 mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
        <a href="/rss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </a>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full border-gray-700 my-4" />

      {/* Copyright Text */}
      <p className="text-center text-xs sm:text-sm font-light">
        © Beyond The Hills, Inc
      </p>

      {/* Additional Links */}
      <div className="mt-2 text-center text-xs sm:text-sm">
        <a href="/affiliate-disclosures" className="text-gray-400 hover:text-gray-300 mx-2">Affiliate Disclosures</a>
        <span className="text-gray-600">•</span>
        <a href="/privacy-policy" className="text-gray-400 hover:text-gray-300 mx-2">Privacy Policy</a>
        <span className="text-gray-600">•</span>
        <a href="/terms-of-use" className="text-gray-400 hover:text-gray-300 mx-2">Terms Of Use</a>
      </div>

      {/* Affiliate Disclaimer */}
      <p className="mt-4 text-center text-xs text-gray-500 max-w-2xl">
        Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission at no extra cost to you. As an affiliate, I only recommend products and services that I feel are high quality and helpful to my readers. Thanks for your support.
      </p>
    </footer>
  );
}