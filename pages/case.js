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
            <p>@hidexir @milk</p>
            <img src="/tele.jpg" alt="テレライブ" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>BraveFrontier (infrastructure)</b>
            <p>@ken-z</p>
            <img src="/brave.png" alt="bravefrontier" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>FINAL FANTASY BRAVE EXVIUS (infrastructure)</b>
            <p>@ken-z</p>
            <img src="/ex.jpg" alt="ff" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>UUUM Recruit Page (infrastructure)</b>
            <p>@ken-z</p>
            <img src="/recruit.png" alt="recruit" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>UUUM HomePage (infrastructure/Design)</b>
            <p>@ken-z</p>
            <img src="/design.png" alt="rhemsdethin" className="tele-logo" />
        </div>
      </section>
    </LayoutCase>
  )
}
