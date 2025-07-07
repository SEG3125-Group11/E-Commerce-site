module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    'bg-primary', 'bg-secondarygreen', 'bg-secondaryorange',
    'text-primary', 'text-textdark', 'text-secondaryorange', 'text-secondarygreen',
    'hover:bg-primary', 'hover:bg-secondarygreen', 'hover:text-secondarygreen',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18917E',
        secondarygreen: '#5cb88d',
        secondaryorange: '#FFA500',
        bglight: '#f9f9f9',
        textdark: '#333',
      },
      spacing: {
        '18': '4.5rem',  // Add this line to define h-18, w-18, etc.
      },
    },
  },
  plugins: [],
}
