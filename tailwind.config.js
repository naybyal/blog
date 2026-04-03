// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
        mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      colors: {
        primary: colors.neutral,
        gray: colors.neutral,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.neutral.900'),
              textDecoration: 'underline',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: theme('colors.neutral.500'),
              },
              code: { color: theme('colors.neutral.900') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.neutral.600'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.neutral.100'),
              textDecoration: 'underline',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: theme('colors.neutral.400'),
              },
              code: { color: theme('colors.neutral.100') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
