const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00e599',
          'primary-light': '#00e5bf',
          secondary: '#f0f075',
          tertiary: '#ff4c79',
          highlight: '#aa99ff',
          checked: '#5093f7',
          'gray-200': '#bfbfbf',
          'gray-400': '#949494',
          'gray-500': '#4a4a4a',
          'gray-600': '#262626',
          'gray-800': '#191919',
          background: '#000000',
          code: '#191919',
          border: '#2e2e2e',
        },
      },
      fontFamily: {
        ibmPlexSans: ['var(--font-ibm-plex-sans)'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*:not(code)': {
              fontFamily: theme('fontFamily.ibmPlexSans'),
            },
            'h1, h2, h3, h4, h5, h6': {
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
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre[class*="shiki"]': {
              backgroundColor: `${theme('colors.brand.code')}!important`,
              fontWeight: 500,
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
      });
    }),
  ],
};
