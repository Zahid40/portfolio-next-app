import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/layout/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/layout/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/layout/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/layout/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/layout/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/layout/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='msapplication-config'
          content='/layout/favicon/browserconfig.xml'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}