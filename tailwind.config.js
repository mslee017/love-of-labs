/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        radixGray: {
          1: '#fcfcfc',
          2: '#f9f9f9',
          3: '#f0f0f0',
          4: '#e8e8e8',
          5: '#e0e0e0',
          6: '#d9d9d9',
          7: '#cecece',
          8: '#bbbbbb',
          9: '#8d8d8d',
          10: '#838383',
          11: '#646464',
          12: '#202020',
        },
        radixViolet: {
          1: '#fdfcfe',
          2: '#faf8ff',
          3: '#f4f0fe',
          4: '#ebe4ff',
          5: '#e1d9ff',
          6: '#d4cafe',
          7: '#c2b5f5',
          8: '#aa99ec',
          9: '#6e56cf',
          10: '#654dc4',
          11: '#6550b9',
          12: '#2f265f',
        },
        radixPink: {
          1: '#fffcfe',
          2: '#fef7fb',
          3: '#fee9f5',
          4: '#fbdcef',
          5: '#f6cee7',
          6: '#efbfdd',
          7: '#e7acd0',
          8: '#dd93c2',
          9: '#d6409f',
          10: '#cf3897',
          11: '#c2298a',
          12: '#651249',
        },
      },
    },
  },
  plugins: [],
};
