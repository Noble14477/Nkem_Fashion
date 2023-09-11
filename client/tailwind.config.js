// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grayColor: "#e1e1e1",
        blueColor: "#00166d",
        darkColor: "#04003e",
        pinkColor: "#f80970",
        whiteColor: "#ffffff",
      },
      backgroundImage:{
        heroBack: "url('../src/assets/bg.png')",
        particl: "url('../src/assets/ParticlesBg.png')",
        grayBg: "url('../src/assets/grayBg.png')",
        footerBg: "url('../src/assets/footerBg.png')",
        cloud: "url('../src/assets/Clouds.png')",
        foam: "url('../src/assets/Foam.png')",
      }
    },
  },
  plugins: [],
}