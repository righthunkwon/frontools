/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 색상 정의
        ourBgGray: '#262626',
        ourBgBlack: '#212121',
        ourBgLightGray: '#3b3b3b',
        ourBgRed: '#eb2113',
        ourBtnGray: '#a6a6a6',
      },
      height: {
        // 높이 정의 ,
      },
      width: {
        // 너비 정의
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
  },
};
