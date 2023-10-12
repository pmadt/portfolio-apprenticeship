/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
          'Fira': ['Fira Code', 'monospace'],
          'Inter': ['Inter', 'sans-serif'],
      },
      extend: {
          colors: {
              'azur-blue': '#2c62ff',
              'azur-blue-hover': '#1c52ef',
              'special-yellow': '#fff959',
              'basic-yellow': '#ffe64e',
              'ruby-red': '#ff2c2c',
              'soft-grey': '#f6f6f6',
              'selection-color': '#d9d9d9',
          },
          spacing: {
              '17': '4.25rem',
              '250' : '62.5rem',
              '200' : '50rem',
              '150' : '37.5rem',
              '80' : '20rem',
              '100' : '25rem',
          },
      },
  },
  plugins: [],
};
