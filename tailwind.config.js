/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1c2d",
          deep: "#002147",
          mid: "#0d234f",
        },
        purple: {
          DEFAULT: "#3533cd",
          deep: "#7d267f",
          soft: "#93a0ff",
        },
        cyan: {
          DEFAULT: "#2db9f0",
          bright: "#03b8ff",
        },
        orange: {
          DEFAULT: "#ff914d",
        },
        terracotta: {
          DEFAULT: "#e2725b",
        },
        cream: {
          DEFAULT: "#fff8ef",
        },
        mist: {
          DEFAULT: "#f6f8fa",
          gray: "#efefef",
        },
      },
      fontFamily: {
        display: ["Barlow", "sans-serif"],
        heading: ["Rajdhani", "sans-serif"],
        body: ["Nunito Sans", "Aileron", "sans-serif"],
        serif: ["Playfair Display", "TT Ramillas", "serif"],
        ui: ["PT Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        card: "0 18px 40px rgba(11, 28, 45, 0.12)",
        soft: "0 8px 24px rgba(11, 28, 45, 0.08)",
      },
    },
  },
  plugins: [],
};
