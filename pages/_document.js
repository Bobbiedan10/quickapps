import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='manifest'
            href='/manifest.webmanifest'
            crossOrigin='use-credentials'
          />

          <meta name='application-name' content='QuickBusiness Book' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='Quick Apps' />
          <meta name='description' content="Find businesses you'll love" />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#f97316' />

          <meta property='og:title' content='Quick Apps' />
          <meta
            property='og:description'
            content="Find businesses you'll love"
          />

          <link
            rel='android-chrome'
            href='/img/icons/android-chrome-192x192.png'
            sizes='192x192'
          />
          <link
            rel='android-chrome'
            href='/img/icons/android-chrome-512x512.png'
            sizes='512x512'
          />
          <link
            rel='android-icon'
            href='/img/icons/android-icon-192x192.png'
            sizes='192x192'
          />
          <link
            rel='apple-touch-icon'
            href='/img/icons/apple-icon-180x180.png'
            sizes='180x180'
          />
          <link
            rel='favicon'
            href='/img/icons/favicon-16x16.png'
            sizes='16x16'
          />
          <link
            rel='apple-touch-icon'
            href='/img/icons/favicon-32x32.png'
            sizes='32x32'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
