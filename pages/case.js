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
            <b>テレライブ (Serverside)</b>
            <p>@hidexir</p>
            <img src="/tele.png" alt="テレライブ" className="tele-logo" />
            <a href="https://tele.live/">https://tele.live/</a>
        </div>
        <div className={utilStyles.box10}>
            <b>BraveFrontier (infrastructure)</b>
            <p>@ken-z</p>
            <img src="/brave.png" alt="テレライブ" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>FINAL FANTASY BRAVE EXVIUS (infrastructure)</b>
            <p>@ken-z</p>
            <img src="/ex.jpg" alt="テレライブ" className="tele-logo" />
        </div>

      </section>
    </LayoutCase>
  )
}
