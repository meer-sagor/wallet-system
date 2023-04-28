/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: '#FBFBFB',
      grayLight: '#71717A',
      black: '#18181B',
      white: '#fff',
      green: '#CFFFD4',
      crimson: '#FFDEDE',
    },
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1120px',
    },
  },
  plugins: [],
};
