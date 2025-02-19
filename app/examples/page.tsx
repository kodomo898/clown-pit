"use client";

import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from '../components/HamburgerMenu';

export default function Examples() {
  const examples = [
    {
      title: "AIAgent Twitter エンゲージメント最適化システム",
      description: "自立型AIエージェントを活用し、X（Twitter）のリストからエンゲージメントの高い投稿を自動で取得、選定し、引用投稿（コメント付き）または自立ツイートを行うシステムを開発。",
      tech: ["OpenAI API", "Twitter API v2", "Python", "FastAPI", "Vertex AI", "Cloud Run", "Cloud Functions"],
      image: "/corp_example/x-ai.png"
    },
    {
      title: "UULEを利用したMEOツール",
      description: "特定のエリアにいるかのように振る舞い、GoogleMapの上位表示を狙うツールを開発。",
      tech: ["Next.js", "Python", "MySQL", "Docker", "Cloud Run", "Cloud SQL", "Cloud Functions", "Google My Business API"],
      image: "/corp_example/meo-tool.png"
    },
    {
      title: "会計ツール開発コンサルティング",
      description: "会計ソフトの再構築に対する、インフラ構成・開発コードレビューを行うコンサルティングを行った。",
      tech: ["Laravel", "Lambda"],
      image: "/corp_example/accounting-tool.png"
    },
    {
      title: "Youtuberクリエイター事務所サイトインフラ最適化",
      description: "サイトのインフラを最適化し、サイトの表示速度を向上させるコンサルティングを行った。",
      tech: ["AWS"],
      image: "/corp_example/youtuber-site.png"
    },
    {
      title: "解体業者向け採用支援サイト自動構築サービス",
      description: "解体業者向けの採用支援サイトを自動で構築するサービスを開発。（Slack workflow経由のみ）エンジニア不要でサイトを構築できるようにするサービス。",
      tech: ["AWS", "Cloudfront", "LightSail", "Lambda"],
      image: "/corp_example/kaitai-site.png"
    },
    {
      title: "VRコンテンツ配信基盤構築",
      description: "VRコンテンツの配信基盤を構築",
      tech: ["AWS", "Cloudfront", "LightSail", "Lambda", "API Gateway"],
      image: "/corp_example/vr-site.png"
    },
    {
      title: "ホームページ作成(各種)",
      description: "複数のコーポレートページ・サービスページ・ランディングページを作成",
      tech: ["AWS", "Cloudfront", "LightSail", "Lambda", "Sakura Cloud", "Vercel"],
      image: "/corp_example/hp-site.png"
    },
    {
      title: "Windows用アプリ改修",
      description: "プリクラ機専用のWindows用アプリの改修を行った。",
      tech: ["AWS", "EC2"],
      image: "/corp_example/windows-app.jpg"
    }
  ];

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

      <main className="flex-1 mt-20 w-full max-w-7xl mx-auto p-8 pb-20 sm:p-20">
        <h1 className="text-3xl font-bold mb-12 tracking-wider opacity-0 animate-fadeIn font-[family-name:var(--font-geist-mono)]">
          Examples
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div 
              key={example.title}
              className={`bg-white/50 dark:bg-black/50 rounded-lg overflow-hidden shadow-lg opacity-0 animate-fadeIn`}
              style={{ animationDelay: `${(index + 1) * 500}ms` }}
            >
              <div className="relative h-48">
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                  {example.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {example.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}