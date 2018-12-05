import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title>Laughing Goat Ghana</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </Head>
    <style jsx global>{`
    * { box-sizing: border-box; margin: 0; padding: 0; height: auto; }
      html,body {
        height:100%;
      }
      body {
        background: #eee;
        font-family: 'Open Sans', sans-serif;
      }
      p {
        line-height: 1.5;
        font-size: .9em;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        color: #333;
      }
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)
