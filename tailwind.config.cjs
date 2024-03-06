const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  important: true,
  darkMode: 'off',
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('dark', [
        '@media (prefers-color-scheme: dark) { &:where(.system, .system *) }',
        '&:where(.dark, .dark *)',
      ]);
    }),
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      inverse: 'var(--color-inverse)',
      'inverse-secondary': 'var(--color-inverse-secondary)',

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      stone: {
        ...colors.stone,
        150: '#EEEDEC',
      },
      bone: {
        50: '#fffefd',
        100: '#fffbf6',
        150: '#fffaf0',
        200: '#f9edd4',
        500: '#d8cab6',
      },
      ochre: {
        200: '#ffd492',
        300: '#FBC380',
        400: '#F8B36F',
        500: '#F4A25D',
        600: '#ef8c5c',
        700: '#e26756',
        800: '#a94f39',
      },
      midnight: {
        600: '#374174',
        700: '#262e57',
        800: '#1d2344',
        900: '#0d122e',
      },
      indigo: {
        50: '#EEF2FF',
        100: '#CFCFED',
        200: '#B0ACDB',
        300: '#918AC8',
        400: '#7267B6',
        500: '#5344a4',
        600: '#403381',
        700: '#322867',
      },
      blue: {
        50: '#d9e4fc',
        100: '#b3c9fa',
        200: '#8caef7',
        300: '#6693f5',
        400: '#4078f2',
        500: '#3360c2',
        600: '#264891',
        700: '#1a3061',
        800: '#060c18',
      },
      plum: {
        50: '#FDF2F8',
        100: '#ECD3E1',
        200: '#DBB4CA',
        300: '#CB94B4',
        400: '#BA759D',
        500: '#a95686',
        600: '#944586',
        700: '#92336b',
        800: '#5f2d4f',
        900: '#430833',
      },
      steel: {
        100: '#f8fdf8',
        300: '#a9d3ec',
        500: '#7c9fd4',
        700: '#4a6b9d',
      },
    },
  },
};