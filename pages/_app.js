import React, { Fragment } from 'react';
import Head from 'next/head';

import { IBM_Plex_Sans } from 'next/font/google';

import '../styles/globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

const App = ({ Component, pageProps }) => {
  const url = process.env.NEXT_PUBLIC_REWRITE_URL || '';
  const title = 'Twin Thing';
  const description = '...';
  const image = 'open-graph-image.jpg';

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel='canonical' href={url} />

        {/* Primary Meta Tags */}
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='image' content={`${url}/static/${image}`} />

        {/* Open Graph / Facebook  */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${url}/static/${image}`} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={`${url}/static/${image}`} />

        {/* favicon */}
        <link rel='icon' type='image/png' href={`${url}/static/favicon.png`} />
      </Head>

      <main className={`prose max-w-none ${ibmPlexSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
};

export default App;
