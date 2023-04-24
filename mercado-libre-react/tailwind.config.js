/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-benefits':'#666666',
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
        '15': '0px 2px 15px 0px rgba(0, 0, 0, 0.184)',
        '20': '0 1px 2px 0 rgb(0, 0, 0, 20%)',
      },
      backgroundImage: {
        'beneficios1': "url('/media/beneficios 1.png')",
        'beneficios2': "url('/media/beneficios 2.png')",
        'beneficios3': "url('/media/beneficios 3.png')",
        'mejores1': "url('/media/mejores 1.png')",
        'mejores2': "url('/media/mejores 2.png')",
        'mejores3': "url('/media/mejores 3.png')",
        'mejores4': "url('/media/mejores 4.png')",
      },
      backgroundSize: {
        '100': '100%',
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
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-22': 'span 22 / span 22',
        'span-24': 'span 24 / span 24',
      },
      gridColumnStart: {
        '23': '23',
      },
    },
  },
  plugins: [],
}
