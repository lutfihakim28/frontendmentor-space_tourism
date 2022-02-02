module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
        '41.5': '10.375rem',
        '42': '10.5rem',
        '42.5': '10.625rem',
        '45.5': '11.375rem',
        '50': '12.5rem',
        '75': '18.75rem',
        '80': '20rem',
        '111.25': '27.8125rem',
        '112': '28rem',
        '135': '33.75rem',
        '200': '50rem',
        
        '28%': '28%',
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
      },
      fontSize: {
        '3.75': '0.9375rem',
        '7': '1.75rem',
        '8': '2rem',
        '10': '2.5rem',
        '14': '3.5rem',
        '20': '5rem',
        '25': '6.25rem',
        '36': '9rem',
      },
      letterSpacing: {
        '1.5': '0.09375rem',
        '2.7': '0.16875rem',
        '2.36': '0.1475rem',
        '3.38': '0.21125rem',
        '4.72': '0.295rem',
      },
      colors: {
        'rich-black': '#0b0d17',
        'lavender': '#d0d6f9',
        'eerie-black': '#151923',
        'arsenic': '#383b4b',
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      gridTemplateRows: {
        '2-auto': '2rem auto',
        '11-auto': '11.75rem auto',
        '2-32': '2rem 32.9375rem',
      },
      gridTemplateColumns: {
        'auto-max': 'auto max(27.8125rem)',
        'auto-32': 'auto 32rem',
      },
      aspectRatio: {
        'mobile': '2.477',
        'desktop': '0.977',
      },
      lineHeight: {
        '25': '6.25rem',
        '36': '9rem',
      },
      gap: {
        '39': '9.75rem',
      },
      boxShadow: {
        'explore': '0 0 0.8rem 1.75rem #28282888',
      },
      dropShadow: {
        'planet': '0 0 1rem rgba(255,255,255,0.25)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
