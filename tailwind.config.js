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
      padding: '30px'
    },
    extend: {

      colors: {
        'primary': "#F73859",
        'manu': "#101921",
        'b-paragraphy': "#E0E0E0",                    
        'w-paragraphy': "#3E4549",
        'icon': "#555555",
        'gray': {
          100: '#FAE4EA',
        }
      },
      fontFamily:{
        pragraph: ["'Roboto', sans-serif"],
        heading: ["'Khula', sans-serif"],
      },

      backgroundImage: {
        'banner': "url('assets/img/banner-photo.png')",
        'achivement': "url('assets/img/achivement.png')",
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
