import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A6E",
          dark: "#142950",
          light: "#2D5BA3",
        },
        accent: {
          DEFAULT: "#C27C2C",
          light: "#E09840",
          muted: "#F5E6CC",
        },
        success: {
          DEFAULT: "#2D7D46",
          muted: "#D1EAD8",
        },
        info: {
          DEFAULT: "#1E5F9A",
          muted: "#DBEAFE",
        },
        warning: {
          DEFAULT: "#92400E",
          muted: "#FEF3C7",
        },
        surface: "#FFFFFF",
        background: "#F7F6F2",
        border: "#E4E2DC",
        text: "#1A1A2E",
        muted: "#6B6B8A",
      },
    },
  },
};

export default config;
