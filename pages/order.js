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
        <div className="anime-type-order">Order</div>
        <div className={utilStyles.box10}>
            <b>- ご相談 </b>
            <p>基本無料　※調査必須の場合は別途相談</p> 
        </div>
        <div className={utilStyles.box10}>
            <b>- WEBサイト構築 </b>
            <p>Wordpress利用(HP)</p> 
            <p>200,000円 ~ (構築含む)(相談可)</p>
            <p>ランディングページ</p>
            <p>50,000円 ~ (構築含む)(相談可)</p>
        </div>
        <div className={utilStyles.box10}>
            <b>- 各種システム構築</b>
            <p>(例)予約管理システム(決済システム含む) </p>
            <p>2,000,000円 ~ (構築含む)(相談可)</p>
            <p>(例)データ蓄積基盤</p>
            <p>300,000円 ~ (構築含む)(相談可)</p>
        </div>
        <div className={utilStyles.box10}>
            <b><p>- 監視/運用/保守</p></b>
            <p>監視のみ </p>
            <p>10,000円 ~ (相談可)</p>
            <p>監視/運用/保守</p> 
            <p>50,000円 ~ (相談可)</p>
        </div>

      </section>
    </LayoutOrder>
  )
}
