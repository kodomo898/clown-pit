"use client";

import { useEffect } from 'react';
// import { Space_Grotesk } from 'next/font/google';
import HamburgerMenu from '../components/HamburgerMenu';
import Image from 'next/image';
import Link from 'next/link';

// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   display: 'swap',
// });

export default function Docs() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="w-full fixed top-0 left-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/cooltext471460951563545.png"
                  alt="ClownPit Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:flex space-x-8">
              <Link href="/docs" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">About</Link>
              <Link href="/examples" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">Examples</Link>
              <a href="#" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">Contact</a>
            </div>
            <div className="sm:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 mt-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-16 tracking-wider opacity-0 animate-fadeIn font-[family-name:var(--font-geist-mono)]">
            About Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Section */}
            <section className="opacity-0 animate-fadeIn animation-delay-1500">
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-geist-mono)]">Mission</h2>
              <div className="bg-black/[.03] dark:bg-white/[.03] p-6 rounded-lg backdrop-blur-sm">
                <p className="text-sm leading-relaxed">
                  私たちClownPitは、最新のテクノロジーを活用し、
                  お客様のビジネスに革新的なソリューションを提供することを使命としています。
                </p>
                <div className="mt-4 p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg">
                  <p className="text-xs leading-relaxed tracking-wide">
                    「技術力と創造性で、未来のビジネスを創造する」
                  </p>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="opacity-0 animate-fadeIn animation-delay-1500">
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-geist-mono)]">Services</h2>
              <div className="space-y-4">
                <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                  <h3 className="font-medium mb-2">Webアプリケーション開発</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">最新のフレームワークを活用した高性能なWebアプリケーションの開発</p>
                </div>
                <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                  <h3 className="font-medium mb-2">モバイルアプリケーション開発</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">iOS/Androidに対応したクロスプラットフォームアプリの開発</p>
                </div>
                <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                  <h3 className="font-medium mb-2">AIソリューション</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">最新のAI技術を活用したビジネスソリューションの提供</p>
                </div>
              </div>
            </section>

            {/* Company Info Section */}
            <section className="opacity-0 animate-fadeIn animation-delay-1500 md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-geist-mono)]">Company</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                    <h3 className="text-sm font-medium mb-2">会社名</h3>
                    <p className="text-sm">株式会社ClownPit</p>
                  </div>
                  <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                    <h3 className="text-sm font-medium mb-2">設立</h3>
                    <p className="text-sm">2024年1月4日</p>
                  </div>
                  <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                    <h3 className="text-sm font-medium mb-2">資本金</h3>
                    <p className="text-sm">1,000,000円</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                    <h3 className="text-sm font-medium mb-2">代表取締役</h3>
                    <p className="text-sm">岩波 賢司</p>
                  </div>
                  <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                    <h3 className="text-sm font-medium mb-2">従業員数</h3>
                    <p className="text-sm">3名（2025年1月末時点）</p>
                  </div>
                  <div className="p-4 bg-black/[.03] dark:bg-white/[.03] rounded-lg backdrop-blur-sm">
                    <h3 className="text-sm font-medium mb-2">適格請求書発行事業者登録番号</h3>
                    <p className="text-sm">T5810408097187</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
