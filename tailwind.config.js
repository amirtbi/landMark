module.exports = {

  content: [

    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'light-blue': 'hsl(233, 100%, 69%)',
        'dark-gray-blue': 'hsl(210, 10%, 33%)',
        'gray-blue': 'hsl(201, 11%, 66%)'
      },
      backgroundImage: {
        hero: "url('./src/assets/images/bg-header-desktop.png')",
        computer:"url('./src/assets/images/image-computer.png')"
      }
    },
    fontFamily: {
      baiJam: 'Bai Jamjuree , sans-serif'
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: '1440px',
        xl: '1440px',
        '2xl':'1440px'
      }
    }
    
  },
  plugins: [],
}
