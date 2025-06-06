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