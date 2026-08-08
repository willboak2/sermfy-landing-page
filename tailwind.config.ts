import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#152259",
          dark: "#0F1A44",
        },
        ink: {
          900: "#000000",
          800: "#272727",
          700: "#3C3C3C",
          500: "#A0AEC0",
        },
        brand: {
          cyan: "#0BB1D7",
          blue: "#3687F3",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(139.69deg, #0BB1D7 -4.87%, #3687F3 88.18%)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "1728px",
      },
    },
  },
  plugins: [],
};
export default config;
