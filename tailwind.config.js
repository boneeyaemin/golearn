/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '575px',
      'md': '767px',
      'lg': '991px',
      'xl': '1199px',
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {

      colors: {
        'primary': " #F73859",
        'manu': "#101921",
        'b-paragraphy': "#E0E0E0",                    
        'w-paragraphy': "##3E4549",
        'icon': "#555555",
      },
      fontFamily:{
        pragraph: ['Roboto', ],
        heading: ['Khula', ],
      },

      backgroundImage: {
        'banner': "url('assets/img/banner-photo.png')",
      }
     
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     './pages/**/*.{html,js}',
//     './components/**/*.{html,js}',
//   ],
//   // ...
// }
