const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['cursor-not-allowed'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00e599',
          'primary-light': '#00e5bf',
          secondary: '#f0f075',
          tertiary: '#ff4c79',
          highlight: '#aa99ff',
          checked: '#66a3ff',
          'gray-200': '#bfbfbf',
          'gray-400': '#949494',
          'gray-500': '#4a4a4a',
          'gray-600': '#262626',
          'gray-800': '#191919',
          // background: '#000000',
          background: '#0c0d0d',
          // surface: '#18191b',
          surface: '#131415',
          border: '#303236',
          focus: '#0000ff',
          actions: {
            // green: '#83db28',
            // yellow: '#f9d849',
            green: '#63eb90',
            yellow: '#f0f075',
          },
        },
      },
      fontFamily: {
        ibmPlexSans: ['var(--font-ibm-plex-sans)'],
      },
      maxWidth: {
        '8xl': '110rem',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*:not(code)': {
              fontFamily: theme('fontFamily.ibmPlexSans'),
            },
            'h1, h2, h3, h4, h5, h6, ul': {
              color: theme('colors.white'),
              margin: 0,
              fontWeight: 500,
            },
            p: {
              color: theme('colors.white'),
              margin: 0,
              fontWeight: 300,
            },
            a: {
              cursor: 'pointer',
              color: theme('colors.white'),
              transition: 'color .2s',
            },
            code: {
              color: theme('colors.white'),
              fontWeight: 300,
              padding: '0.4rem',
              backgroundColor: theme('colors.brand.surface'),
              borderRadius: '0.2rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre[class*="shiki"]': {
              backgroundColor: `${theme('colors.brand.surface')}!important`,
              fontWeight: 500,
              margin: 0,
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gradient-mask-t': {
          'mask-image': 'radial-gradient(50% 90% at 50% 100%, #000, transparent)',
        },
        '.gradient-mask-b': {
          'mask-image': 'radial-gradient(50% 90% at 50% 0%, #000, transparent)',
        },
        '.scrollbar-none': {
          'scrollbar-color': '#262626 #0c0d0d',
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '2px',
          },
          '&::-webkit-scrollbar-thumb': {
            'background-color': '#262626',
          },
          '&::-webkit-scrollbar-track': {
            'background-color': '#0c0d0d',
          },
        },
      });
    }),
  ],
};
