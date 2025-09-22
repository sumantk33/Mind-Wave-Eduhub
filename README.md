# Mind-Wave EduHub

A modern, responsive educational platform built with Vite, vanilla JavaScript, and Tailwind CSS. Features a clean, professional design with dark/light theme support, a mobile top-sheet menu, and smooth animations.

## Features

- 🎨 Modern, responsive design (mobile-first)
- 🌙 Dark/Light theme toggle (desktop header + mobile menu)
- 📱 Mobile top-sheet menu with overlay and smooth slide animation
- ✨ Smooth scroll and on-view animations
- 🧩 Lucide icons rendered via `data-lucide` attributes
- 🎓 Course showcase with ratings and details
- 📞 Contact form with validation-friendly markup
- ❓ Interactive FAQ section
- 🔗 Social links

## Tech Stack

- **Vite** - Fast dev server and optimized build
- **Vanilla JavaScript** - No frameworks
- **Tailwind CSS** - Utility-first styling (via npm)
- **PostCSS + Autoprefixer** - CSS processing
- **Lucide** - Icon set (via npm)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mindwave/
├── index.html                 # Main HTML file
├── public/
│   └── robots.txt             # Search engine directives
├── src/
│   ├── main.js                # Entry point (imports CSS + init scripts, registers Lucide icons)
│   ├── styles/
│   │   └── main.css           # Tailwind + custom layers
│   └── utils/
│       ├── theme-toggle.js    # Theme toggle (desktop + mobile buttons)
│       └── on-load.js         # Init helpers (optional future scripts)
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Deployment Notes

- For GitHub Pages, ensure `base` in `vite.config.js` matches your deployment:
  - Relative base (works anywhere): `base: "./"`
  - Repo base: `base: "/<your-repo-name>/"`
- Deploy the contents of the `dist/` folder (not the source files).

## Contributing

This project is currently in active development. Contributions and feedback are welcome!

## License

© 2025 Mind-Wave EduHub. All rights reserved.
