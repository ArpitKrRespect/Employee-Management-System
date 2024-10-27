/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#1C1C1C', // Primary dark background color
        accentBlue: '#00A4FF', // Accent color for text or buttons
        softWhite: '#E5E5E5', // For light text contrast
      },
      backgroundImage: {
        'gradient-to-r-dark': 'linear-gradient(to right, #1a1a1a, #333333, #1a1a1a)', // Dark gradient background
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-glow': 'inset 0 4px 8px rgba(255, 255, 255, 0.05)',
        'button-glow': '0 0 10px rgba(0, 164, 255, 0.5), 0 0 20px rgba(0, 164, 255, 0.5)',
        'card': '0px 4px 20px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'text-gradient': 'gradientShift 3s ease infinite',
        'fade': 'fadeIn 1.5s ease-out',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
