/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bg: background
        ourBgGray: '#262626',
        ourBgBlack: '#212121',
        ourBgLightGray: '#3b3b3b',
        ourBgRed: '#eb2113',
        // Ln: line (text, icon, etc)
        ourLnGray: '#a6a6a6',
        ourLnLightGray: '#373737',
        ourLnWhite: '#d5d5d5',
      },
      height: {
        //
      },
      width: {
        //
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
  },
};
