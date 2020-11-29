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
            <img src="/tele.jpg" alt="テレライブ" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>BraveFrontier (Infrastructure)</b>
            <p>@ken-z</p>
            <img src="/brave.png" alt="bravefrontier" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>FINAL FANTASY BRAVE EXVIUS (Infrastructure)</b>
            <p>@ken-z</p>
            <img src="/ex.jpg" alt="ff" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>UUUM Recruit Page (Infrastructure)</b>
            <p>@ken-z</p>
            <img src="/recruit.png" alt="recruit" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>UUUM HomePage (Infrastructure)</b>
            <p>@ken-z</p>
            <img src="/hp.png" alt="uuum" className="tele-logo" />
        </div>
        <div className={utilStyles.box10}>
            <b>ADMIXLINE HomePage (Design)</b>
            <p>@kazuki</p>
            <img src="/admix.png" alt="admix" className="tele-logo" />
        </div>

      </section>
    </LayoutCase>
  )
}
