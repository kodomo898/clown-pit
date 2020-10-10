import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
          <title>KEN-Z</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          KEN-Z(kodomo893)
        </h1>

        <p className="anime-type">
          Infrastructure Engineer
        </p>

        <p>
            <a href="https://twitter.com/kenji_infra_man">
                <img src="/twitter.png" alt="KEN-Z" className="logo" />
            </a>
            <a href="https://www.wantedly.com/users/31440881">
                <img src="/wanted.png" alt="wantedly" className="logo" />
            </a>
        </p>

        <div className="grid">
          <Link href="/profile">
              <a className="card">
                <h3>プロフィール &rarr;</h3>
                <p>私の簡単な経歴と自己紹介です。</p>
              </a>
          </Link>

          <a href="" className="card">
            <h3>アウトプット記事 &rarr;</h3>
            <p>技術的なアウトプット記事。</p>
          </a>

          <a
            href="/order"
            className="card"
          >
            <h3>お仕事のご依頼 &rarr;</h3>
            <p>ご相談受け付けております。</p>
          </a>

          <a
            href=""
            className="card"
          >
            <h3>お問い合わせ &rarr;</h3>
            <p>
              お気軽にどうぞ。
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' KEN-Z'}
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }

        @media screen and (max-width: 10px) {
          footer img {
            margin-left: 0.5rem;
          }
        }

        @media screen and (max-width: 10px) {
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
          }
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        @media screen and (max-width: 10px) {
          .title {
              margin: 0;
              line-height: 1.15;
              font-size: 4rem;
          }
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .certlogo {
          line-height: 1.5;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 50px;
          float: right;
        }

        .cert {
          height: 80px;
        }

        .certbox {
          padding-top: 100px;
          padding: 1.1rem;
          width: 100%;
        }

        .img {
          float: right;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #f7fafc;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
