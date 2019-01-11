import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title>Laughing Goat Ghana</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Accommodation and surf house in Busua Beach Ghana" />
      <meta name="keywords" content="Accommodation, Busua Beach, restaurant, vegan, surfing, skateboarding, surf camp, surf house" />
      <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','UA-124333448-1');`}} />
    <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-124333448-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
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
