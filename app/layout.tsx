import "./globals.css";
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ClownPit | エンジニアリング集団',
  description: 'フルスタックエンジニアリング集団。最新技術を駆使したWeb開発、AI実装、クラウドアーキテクチャ設計まで、技術的課題を解決します。',
  keywords: 'エンジニアリング, フルスタック開発, AI実装, クラウドアーキテクチャ, テックスタートアップ, システム開発',
  openGraph: {
    title: 'ClownPit | Tech Engineering Team',
    description: '技術を愛するエンジニア集団',
    images: '/og-tech-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClownPit Engineers',
    description: '最先端技術で未来を創造する',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KTHT5S3G');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTHT5S3G"
        height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}