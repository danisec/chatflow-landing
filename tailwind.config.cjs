/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sx: '330px',
      // => @media (min-width: 330px) { ... }

      xs: '360px',
      // => @media (min-width: 360px) { ... }

      ms: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      merrywheater: ['Merriweather', 'sans-serif'],
      sourcesans: ['Source Sans Pro', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/img/hero/bg-hero.png')",
      },
      colors: {
        'text-secondary': '#0D082C99',
        'primary-blue': '#4635F3',
        'primary-orange': '#F5AC76',
        'primary-pink': '#FF5391',
      },
    },
  },
  plugins: [],
}
