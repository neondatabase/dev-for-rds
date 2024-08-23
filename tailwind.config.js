const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['cursor-not-allowed'],
  theme: {
    extend: {
      colors: {
        brand: {
          text: '#c9cbcf',
          primary: '#00e599',
          'primary-light': '#00e5bf',
          secondary: '#f0f075',
          tertiary: '#ff4c79',
          highlight: '#aa99ff',
          checked: '#66a3ff',
          'gray-200': '#94979e',
          'gray-400': '#61646b',
          'gray-500': '#4a4a4a',
          'gray-600': '#262626',
          'gray-800': '#191919',
          background: '#000000',
          // background: '#0c0d0d',
          // surface: '#18191b',
          // surface: '#131415',
          surface: '#0d0e10',
          'surface-light': '#272a35',
          'surface-dark': '#16181d',
          border: '#1a1c20',
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
        inter: ['var(--font-inter)'],
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
              fontFamily: theme('fontFamily.inter'),
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
              margin: 0,
              fontWeight: 600,
            },
            'p, ol, ul': {
              color: theme('colors.brand.text'),
              margin: 0,
              fontWeight: 300,
              fontSize: '1.2rem',
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
              backgroundColor: theme('colors.brand.surface-dark'),
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
              overflow: 'auto',
              borderRadius: '0px',
              // 'white-space': 'pre-line',
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
