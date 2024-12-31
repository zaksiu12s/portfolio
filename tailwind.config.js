/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        BebasNeue: ["Bebas Neue", "sans-serif"],
      },
      keyframes: {
        growWidth: {
          "0%": { width: "0" },
          "100%": { width: "75%" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromLeftYTranslate: {
          "0%": {
            transform: "translateX(-100%) translateY(-66%)",
            opacity: "0",
          },
          "100%": { transform: "translateX(0) translateY(-66%)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRightYTranslate: {
          "0%": {
            transform: "translateX(100%) translateY(-66%)",
            opacity: "0",
          },
          "100%": { transform: "translateX(0) translateY(-66%)", opacity: "1" },
        },
        spinBorder: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideInFromLeftYTranslate:
          "slideInFromLeftYTranslate var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        slideInFromRightYTranslate:
          "slideInFromRightYTranslate var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        slideInFromLeft:
          "slideInFromLeft var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        slideInFromRight:
          "slideInFromRight var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        growWidth:
          "growWidth var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        spinBorder: "spinBorder 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
