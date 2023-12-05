/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(92.19% 89.74% at 32.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)',
        'img1': './src/assets/asset-loch.png',
        'linear-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 27.5%, rgba(22, 93, 255, 0.16) 100%)',
      },
      boxShadow: {
        'input-shadow': '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}