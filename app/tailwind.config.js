module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    screens:{
    'ssm': '475px',
    // => @media (min-width: 420px) { ... }    
    'sm': '576px',
    // => @media (min-width: 576px) { ... }
    'mdl': '576px',
    // => @media (min-width: 576px) { ... }
    'md': '960px',
    // => @media (min-width: 960px) { ... }
    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }}
    },
    extend: {
      fontFamily:{
        "Roboto" : ['Roboto', 'sans-serif'],
        "Bebas" : ['Bebas Neue', 'cursive'],
        "Mont" : ['Montserrat',' sans-serif']
      },
      colors: {
        "MainColor" : "#080F28",
        "SecondaryColor" : "#141A32",
        "AccentColor" : "#007AFF",
        "LigthBlue" : "#366B95",
        "LigthBlueLg" : "#00B6FF",
        "LigthBlueText" : "#8da0bc",
        "BlancoLeche" :"#FFFFF5"
      },
    },
  },
  plugins: [],
}
