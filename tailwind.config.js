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
        cancelButtonColor: "#C6C6C6",
        captionColor: "#A8A8A8",
        unFocusColor: "#D9D9D9",
        btNavFocusColor: "#121212",
        textMainColor: "#121212",
        mainLogoTextColor: "#2E2E2E",
        errorTextColor: "#F24822",
        deleteButtonColor: "#FF4141",
        profileSelectColor: "#9747FF",
        profilePointTextColor: "#9E89FE",
        postBorderColor: "#C1C1C1",
        chatListHoverColor:"#F5F6F7"
        
      },
      fontFamily: {
        pre: ['Pretendard Variable'],
        gMarket: ['GmarketSans']
      },
      boxShadow: {
        navShadow: '0px -4px 10px 0px rgba(142, 139, 139, 0.15)',
        profileInfoShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.20)',
      }

    },
  },
  plugins: [ require('@tailwindcss/forms')],
}