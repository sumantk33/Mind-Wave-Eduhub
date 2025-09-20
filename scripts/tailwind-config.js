// Tailwind config for dynamic colors and animations
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#60a5fa",
          DEFAULT: "#3b82f6",
          dark: "#1e40af",
          darker: "#1e3a8a",
        },
        accent: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
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
    },
  },
  darkMode: "class",
};
