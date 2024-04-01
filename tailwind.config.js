/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],

  theme: {
    extend: {
      colors:{
        primary: '#3498bd',
        primaryContent: '#02090e',
        primaryLight: '#5faee3',
        primaryDark: '#217bdb',
        secondary: '#ca34bd',
        secondaryContent: '#ffffff',
        secondaryLight: '#d55fe3',
        secondaryDark: '#ab21bb',
        foreground:'#fbfbfb',
        background: '#eff0f1',
        border: '#dde0e2',
        copy: '#232729',
        copyLight: '#5e686e',
        copyLighter: '#848e95',
        success: '#34db34',
        warning: '#dbdb34',
        error: '#db3434',
        successContent: '#020e02',
        warningContent: '#0e0e02',
        errorContent: '#ffffff'
      }
    },
  },
  plugins: [],
}

