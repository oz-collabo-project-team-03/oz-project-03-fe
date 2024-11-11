/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#A6A4E9",
        primaryHoverColor: "#7B78E3",
        helpButtonColor: "#6169FF",
        buttonColor: '#A6A4E9',
        commuBgColor: "#F4F1FF",
        inputBorderColor: "#D6D5DD",
        inputFocusColor: "#A6A4E9",
        commuInputColor: "#F5F6F7",
        borderColor: "#F2EFFF",
        repleText: "#494949",
        gray20Color: "#C6C6C6",
        captionColor: "#A8A8A8",
        btNavUnFocusColor: "#D9D9D9",
        btNavFocusColor: "#121212",
        textMainColor: "#121212",
        mainLogoText: "#2E2E2E",
        heartButtonColor: "#F24822",
        deleteButtonColor: "#FF4141",
        profileSelectColor: "#9747FF"
        
      },
      fontFamily: {
        pre: ['Pretendard Variable']
      }

    },
  },
  plugins: [],
}