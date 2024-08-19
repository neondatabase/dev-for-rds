import '../styles/globals.css';
// https://github.com/vercel/next.js/discussions/49607
import React, { Fragment } from 'react';
import Head from 'next/head';

import { IBM_Plex_Sans } from 'next/font/google';

import NeonLogo from '../components/neon-logo';
import GitHubIcon from '../components/github-icon';

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

      <header id='header' className='absolute top-0 left-0 w-full h-16 z-20'>
        <nav className='flex justify-between px-4 lg:px-12 py-5 w-full mx-auto max-w-8xl'>
          <a href='https://neon.tech/' target='_blank' rel='noopener' className='self-start'>
            <NeonLogo />
          </a>
          <a
            href='https://github.com/neondatabase/neon'
            target='_blank'
            rel='noopener'
            className='flex gap-2 text-white font-bold self-start border-2 border-white items-center p-1 lg:p-1.5 -mt-1 rounded-full 
              no-underline transition-colors duration-300 hover:border-brand-primary'
          >
            <GitHubIcon className='w-7 h-7 lg:h-8 lg:w-8' />
          </a>
        </nav>
      </header>
      <main className={`prose max-w-none ${ibmPlexSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
};

export default App;
