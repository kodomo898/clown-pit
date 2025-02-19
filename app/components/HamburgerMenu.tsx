'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-black/[.08] dark:hover:bg-white/[.08] rounded-lg"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-current transform transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-current transform transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <nav className="absolute top-12 right-0 bg-white dark:bg-black p-4 rounded-lg shadow-lg">
          <ul className="space-y-2">
            <li><Link href="/" className="hover:opacity-70">Home</Link></li>
            <li><Link href="/docs" className="hover:opacity-70">Docs</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
} 