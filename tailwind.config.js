/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hmGreen : '#21b37e',
        hmDark : '#2b2d42',
        hmGray : '#767986',
        hmsearchBorderColor: '#6c727f',
        hmActiveStar : '#ffa91f',
        hmfooterBg : '#f3f4f4',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      fontSize : {
        'px-12' : '12px',
        'px-14' : '14px',
        'px-15' : '15px',
        'px-18' : '18px',
        'px-20' : '20px',
        'px-25' : '25px',
        'px-30': '30px',
        'px-35': '35px',
        'px-45': '45px',
      },
      boxShadow : {
        hmDefault : '0px 12px 22px 0px rgb(43 45 64 / 7%)',
        hmDefaultHover : '0px 12px 22px 0px rgb(43 45 64 / 14%)',
        discovery:'22px 12px 12px 0px rgb(0 0 0 / 16%)'
      },
    },
  },
  plugins: [],
}
