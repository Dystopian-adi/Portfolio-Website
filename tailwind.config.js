/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: '#222831',
      //   secondary: '#393E46',
      //   accent: '#00ADB5',
      //   highlight: '#EEEEEE',
      //   'primary-rgb': 'rgb(34, 40, 49)',
      //   'secondary-rgb': 'rgb(57, 62, 70)',
      //   'accent-rgb': 'rgb(0, 173, 181)',
      //   'highlight-rgb': 'rgb(238, 238, 238)',
      // },
      // colors: {
      //   primary: '#071952',
      //   secondary: '#0B666A',
      //   accent: '#35A29F',
      //   highlight: '#97FEED',
      //   'primary-rgb': 'rgb(7, 25, 82)',
      //   'secondary-rgb': 'rgb(11, 102, 106)',
      //   'accent-rgb': 'rgb(53, 162, 159)',
      //   'highlight-rgb': 'rgb(151, 254, 237)',
      // },
      colors: {
        primary: '#AD8B73',
        secondary: '#CEAB93',
        accent: '#E3CAA5',
        highlight: '#FFFBE9',
        'primary-rgb': 'rgb(173, 139, 115)',
        'secondary-rgb': 'rgb(206, 171, 147)',
        'accent-rgb': 'rgb(227, 202, 165)',
        'highlight-rgb': 'rgb(255, 251, 233)',
      },
    },
  },
  plugins: [],
}

