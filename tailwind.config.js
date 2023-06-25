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
     
    },
  },
  plugins: [],
}
