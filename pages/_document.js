import React from 'react';
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <Html lang='en'>
      <Head>{isProd ? <Script strategy='afterInteractive' src='https://neonapi.io/cb.js' /> : null}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
