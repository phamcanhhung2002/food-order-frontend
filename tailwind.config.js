/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    content: {
      'star': "url('/textures/stars.png')",
      'limb': "url('/textures/limb.png')",
      'dish': "url('/images/home/dish_1.png)",
      'dish2': "url('/images/home/dish_2.png)",
      'dish3': "url('/images/home/dish_3.png)",
      'dish4': "url('/images/home/dish_4.png)",
    },
    colors: {
      'primary': '#195A00',
      'text': '#333',
      'content': "#4f4f4f",
      'disabledGreen': "rgba(168,188,161,.3)",
      'white': '#fff',
      'black': '#000',
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'attractive': ['Miniver', 'cursive']
    }, 
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2240px'
      }
    },
  },
  plugins: [],
}

