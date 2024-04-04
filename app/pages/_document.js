import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/static/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/static/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/static/favicon-16x16.png'
        />
        <link rel='manifest' href='/static/manifest.webmanifest' />
        <link
          rel='mask-icon'
          href='/static/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='msapplication-config'
          content='/static/browserconfig.xml'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}