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
          'light-gray': '#afb1b6',
          'dark-gray': '#131415',
          background: '#0c0d0d',
          code: '#131415',
          globe: '#0c0d0d',
          atmosphere: '#135b45',
          border: '#242628',
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
              color: theme('colors.brand.primary'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
