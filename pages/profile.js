import Head from 'next/head'
import Layout, { profTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{profTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><b>@ken-z</b></p>
        <p>
            AWSをメインとしたインフラ構築を担当。
            中学時代からインフラの世界に興味を持ち、FPS等のゲームサーバを構築。
            AWSでの構築をメインに各企業に提案・構築・保守・運用・その他を実施
        </p>
        <p>
            ECS等のコンテナオーケストレーションツールを利用した構築経験も豊富
        </p>
        <p><b>@hidexir</b></p>
        <p>
            大学時代にコーディングを本格的に始め自身でアプリをリリース。
            その後、技術力向上の為スタートアップや上場企業を中心に開発を行うほか、「AbemaTV」にて広告開発を経験。
        </p>
        <p><b>@milk</b></p>
        <p>
            複数のベンチャー企業でWebサービス開発を行う一方、学生時代に起業し、モバイルアプリケーションの開発・立ち上げを経験。
        </p>
        <p><b>@kazuki</b></p>
        <p>
            コーディングをメインに担当。
            コーポレートページ・LP等多くの企業のサイトデザイン・コーディングをスピードで行う。
        </p>
        <p>
            ECS等のコンテナオーケストレーションツールを利用した構築経験も豊富
        </p>
      </section>
    </Layout>
  )
}
