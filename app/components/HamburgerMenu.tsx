'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 hover:bg-black/[.08] dark:hover:bg-white/[.08] rounded-full"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-current transform transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-current transform transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* メニュー */}
      <div 
        className={`fixed top-0 right-0 bottom-0 h-screen w-80 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          <nav className="mt-16">
            <ul className="space-y-8">
              <li>
                <Link 
                  href="/" 
                  className="text-2xl text-white/80 hover:text-white transition-colors font-[family-name:var(--font-geist-mono)] flex items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-8 h-[1px] bg-white/40 mr-4 transform origin-left transition-transform group-hover:scale-x-150"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-2xl text-white/80 hover:text-white transition-colors font-[family-name:var(--font-geist-mono)] flex items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-8 h-[1px] bg-white/40 mr-4 transform origin-left transition-transform group-hover:scale-x-150"></span>
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/examples" 
                  className="text-2xl text-white/80 hover:text-white transition-colors font-[family-name:var(--font-geist-mono)] flex items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-8 h-[1px] bg-white/40 mr-4 transform origin-left transition-transform group-hover:scale-x-150"></span>
                  Examples
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-2xl text-white/80 hover:text-white transition-colors font-[family-name:var(--font-geist-mono)] flex items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-8 h-[1px] bg-white/40 mr-4 transform origin-left transition-transform group-hover:scale-x-150"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
} 