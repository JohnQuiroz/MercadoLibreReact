/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFF159',
        'gray-dark': '#333333',
        'gray': '#4B4B4B',
        'gray-light': '#666666',
        'gray-lighter': '#999999',
        'gray-transparent': '#3333339a',
        'white': '#FFFFFF',
        'white-lighter': '#EFEFEF',
        'white-light': '#EEEEEE',
        'white-dark': '#ECECEC',
        'white-darker': '#EBEBEB',
        'border': '#e6e6e6',
        'blue': '#3483FA',
        'green': '#00A650',
        'gradient': 'linear-gradient(to right, #A90F90 60%, #0C1A51)',
        'black': '#000000',
      },
      boxShadow: {
        '20': '0 1px 2px 0 rgb(0, 0, 0, 20%)',
      },
    },
    fontSize: {
      '11px': '.688rem',
      '13px': '.813rem',
      '15px': '.938rem',
      '17px': '1.063rem',
      '19px': '1.188rem',
      '22px': '1.375rem',
      '23px': '1.438rem',
      '25px': '1.563rem',
      '26px': '1.625rem',
      '28px': '1.75rem',
    },
  },
  plugins: [],
}
