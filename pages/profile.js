import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{profTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><b>紹介</b></p>
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

        <p><b>経歴</b></p>
        <p>
        <b>- 株式会社エイリム</b>
        </p>
        <p>
            ・ゲームシステムの監視（各サーバのプロセス監視・load average等）
        </p>
        <p>
            ・ディスク容量監視(Zabbix, Newrelic)
        </p>
        <p>
            ・構成管理
                Opsworksにて自動デプロイシステムを構築 chefを利用した自動化（１００台）
                Shellscriptを利用した自動化
                100台に対するlua言語での負荷試験
                Version切り替えプログラム開発（PHP）
        </p>
        <p>
            ・社内インフラ管理
                各PC・クライアント端末（スマートフォン）管理
         </p>

        <p>
        <b>- 株式会社RHEMSJapan</b>
        </p>
        <p>
        ・Webシステムの死活監視/ディスク容量監視(Zabbix)/pythonを利用した通知の自動化等( 4社を担当)
        </p>
        <p>
        ・AWSCLIを利用した、構築自動化
        </p>
        <p>
        ・Opsworks＋Chefを利用したサーバ管理
        </p>
        <p>
        ・DockerでのWEBサービス構築
        </p>
        <p>
        ・自社サービスWolipaの開発（PHP）
        </p>
        <p>
        ・写真販売サイトインフラ提案・構築（Docker+RDS+EC2）
        </p>
        <p>
        ・Cloudwatchをトリガーとした、AWSイベント監視
        </p>

        <p><b>- UUUM株式会社</b></p>

        <p>・全12プロジェクト横断しての、運用・保守・管理・改修</p>
        <p>・コーポレートサイト・クリエイターサイトの運用・保守・改修</p>
        <p>・現環境の再構築（自動化・簡略化）</p>
        <p>・ECSを利用したコンテナ管理</p>
        <p>・Dockerでのローカル環境整備</p>
        <p>・プロジェクトでのRails開発</p>
        <p>・Well-Architectedを元としたAWS改修</p>
        <p>・Terraformの作成・保守</p>
        <p>・チームのタスク管理等</p>

      </section>
    </Layout>
  )
}
