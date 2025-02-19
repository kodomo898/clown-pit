"use client";

import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="w-full fixed top-0 left-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/cooltext471460951563545.png"
                alt="ClownPit Logo"
                width={120}
                height={32}
                className="h-8 w-auto dark:invert"
              />
            </div>
            <div className="hidden sm:flex space-x-8">
              <Link href="/about" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">About</Link>
              <Link href="/examples" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">Examples</Link>
              <a href="#" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">Contact</a>
            </div>
            <div className="sm:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </header>

      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="flex-1 flex flex-col gap-8 items-center justify-center p-8 pb-20 sm:p-20">
        <Image
          className="dark:invert opacity-0 animate-fadeIn"
          src="/cooltext471460951563545.png"
          alt="clownpit logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center font-[family-name:var(--font-geist-mono)]">
          <p className="opacity-0 animate-fadeIn animation-delay-1500">
            Competent Engineer Group
          </p>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row opacity-0 animate-fadeIn animation-delay-1500">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/docs"
          >
            Read our docs
          </Link>
          <a
            className="gap-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/examples"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-xs">
          Copyright © 2025 ClownPit
        </p>
      </footer>
    </div>
  );
}
