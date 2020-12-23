import Head from 'next/head'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <link rel="manifest" href="/manifest.json" />
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />

        <link rel="apple-touch-icon" href="/vercel.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#FFE1C4"/>
        <meta name="theme-color" content="#FFE1C4"/>
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
