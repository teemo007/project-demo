/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
          colors: {
            /* 'db-purple': '#7451f8',
            'sidebar-border':'rgb(130,159,100)',
            'sidebar-item':'#999',
            'sidebar-span':'#888',
            'sidebar-hover': '#ece8ff',
            'linkactive':'#ece8f0', */
          },
          cursor:{
            doubleClick: "url('/src/assets/double.png'), pointer",
          }
        }
    },
    plugins: []
}
