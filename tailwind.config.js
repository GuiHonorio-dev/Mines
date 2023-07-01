/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'mines': '380px 1fr'
      },
      backgroundImage: {
        'diamont': "url('./public/diamont.png')",
        'bomb': "url('./public/bomb.png')"
      },
      boxShadow: {
        '3xl': '0px 0px 22px 10px rgba(0,0,0,0.75)',
      },
      
      
    },
  },
  plugins: [],
}

// linear-gradient(135.41deg,#484c54 .47%,#232f39 99.56%)