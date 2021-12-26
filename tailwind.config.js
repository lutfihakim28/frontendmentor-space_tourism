module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ['Bellefair', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      colors: {
        'rich-black': '#0b0d17',
        'lavender': '#d0d6f9',
        'eerie-black': '#151923',
      },
      backgroundImage: {
        'home-mobile': "url('./src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('./src/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('./src/assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('./src/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('./src/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('./src/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('./src/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./src/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('./src/assets/crew/background-crew-desktop.jpg')",
        'tech-mobile': "url('./src/assets/technology/background-technology-mobile.jpg')",
        'tech-tablet': "url('./src/assets/technology/background-technology-tablet.jpg')",
        'tech-desktop': "url('./src/assets/technology/background-technology-desktop.jpg')",
      }
    },
  },
  plugins: [],
}
