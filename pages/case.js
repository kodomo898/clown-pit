import Head from 'next/head'
import Layout, { caseTitle, LayoutCase } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Case() {
  return (
    <LayoutCase case>
      <Head>
        <title>{caseTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className="anime-type-case">サービス事例</div>
        <div className={utilStyles.box10}>
            <b>テレライブ </b>
            <p>@hidexir</p>
            <img src="/tele.png" alt="テレライブ" className="tele-logo" />
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
    </LayoutCase>
    <style jsx>{`
        .tele-logo {
            width: 10px;
        }
    `}`
  )
}
