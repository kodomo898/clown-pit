import Head from 'next/head'
import Layout, { orderTitle, LayoutOrder } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Order() {
  return (
    <LayoutOrder order>
      <Head>
        <title>{orderTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.title}>Order</div>
        <div className={utilStyles.box10}>
            <b>WEBサイト構築</b>
            <p>Wordpress利用 200,000円 ~(構築含む)(相談可)</p>
            <p>ランディングページ 50,000円 ~(構築含む)(相談可)</p>
        </div>
        <div className={utilStyles.box10}>
            <b>各種システム構築</b>
            <p>(例)予約管理システム(決済システム含む) 2,000,000円 ~(構築含む)(相談可)</p>
            <p>(例)データ蓄積基盤 300,000円 ~(構築含む)(相談可)</p>
        </div>
        <div className={utilStyles.box10}>
            <b>ご依頼者様に安全にシステムを利用していただくために、以下の</b>
            <p>(例)予約管理システム(決済システム含む) 2,000,000円 ~(構築含む)(相談可)</p>
            <p>(例)データ蓄積基盤 300,000円 ~(構築含む)(相談可)</p>
        </div>

      </section>
    </LayoutOrder>
  )
}
