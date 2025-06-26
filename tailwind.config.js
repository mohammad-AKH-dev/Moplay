/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  important: true,
  theme: {
    screens: {
      'mn': '400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px'
    },
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        'regular': 'Ubuntu-Regular'
      },
      colors: {
        'link': '#29B6F6',
        'dark-title': '#ffffff',
        'title': '#0A0D14',
        'selected': '#29B6F6',
        'red': '#FF5858',
        'footer': '#757F95',
        'light': '#131722'
      },
      backgroundColor: {
       'main': '#06090f'
      }
    },
  },
  plugins: [require("daisyui")], // ← اضافه کردن DaisyUI
}