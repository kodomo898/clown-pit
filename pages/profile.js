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
        <p><b>ken-z</b></p>
        <p>
            AWSをメインとしたインフラ構築を担当。
            中学時代からインフラの世界に興味を持ち、FPS等のゲームサーバを構築。
        </p>
        <p>
            その後WEBサーバ・メールサーバ・DBサーバ(mysql)等各種インフラに関することを独学で学ぶ。
            学んだ知識を元に、WEB系の会社にインターン生として入社。
        </p>
        <p>
            インフラの知識以外に、WEBの知識(SEO等)を学び、それに最適なインフラ構築を考え出す。
            卒業後、某ゲーム会社に入社しゲームアプリのインフラ(AWS環境)を構築(総台数100台以上)し、
            それに対する負荷テストをlua言語にて実施。(クレジット  https://goo.gl/3e5YUg)
        </p>
        <p>
            AWSに興味を持ちAWS専門の会社に転職
            AWSでの構築をメインに各企業に提案・構築・保守・運用・その他を実施
        </p>
        <p>
            Wordpress専用耐高負荷3環境システム<a href="https://wolipa.biz/">WoliPa</a>を単独開発
            Dockerを利用することによりインフラ/開発陣営どちらにも優しいシステムを提供することに成功
        </p>
        <p>
            wolipaはコンテナにて構築設計されており、
            コンテナ技術に関しても多くの知識を得ている
        </p>
        <p>
            ECS等のコンテナオーケストレーションツールを利用した構築経験も豊富
        </p>

      </section>
    </Layout>
  )
}
