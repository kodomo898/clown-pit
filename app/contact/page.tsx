"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HamburgerMenu from '../components/HamburgerMenu';

declare global {
  interface Window {
    onTurnstileSuccess: (token: string) => void;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // グローバルコールバック関数を定義
    window.onTurnstileSuccess = (token: string) => {
      setToken(token);
    };

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileCallback';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // @ts-expect-error - window.onTurnstileSuccessの削除
      delete window.onTurnstileSuccess;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!token) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '送信に失敗しました');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setToken(null);
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  };

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
              <Link href="/about" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">About</Link>
              <Link href="/examples" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">Examples</Link>
              <Link href="/contact" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 font-[family-name:var(--font-geist-mono)]">Contact</Link>
            </div>
            <div className="sm:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 mt-20 w-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-16 tracking-wider opacity-0 animate-fadeIn font-[family-name:var(--font-geist-mono)]">
            Contact
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8 opacity-0 animate-fadeIn animation-delay-500">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-[family-name:var(--font-geist-mono)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/[.03] dark:bg-white/[.03] backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 font-[family-name:var(--font-geist-mono)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/[.03] dark:bg-white/[.03] backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 font-[family-name:var(--font-geist-mono)]">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 rounded-lg bg-black/[.03] dark:bg-white/[.03] backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-[family-name:var(--font-geist-mono)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-black/[.03] dark:bg-white/[.03] backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div 
                className="cf-turnstile" 
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                data-callback="onTurnstileSuccess"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || !token}
              className="w-full py-3 px-6 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-opacity disabled:opacity-50 font-[family-name:var(--font-geist-mono)]"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-500 text-sm text-center font-[family-name:var(--font-geist-mono)]">
                メッセージを送信しました。
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center font-[family-name:var(--font-geist-mono)]">
                送信に失敗しました。もう一度お試しください。
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
} 