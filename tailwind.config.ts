import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-airplane": "url('/mainBackgroundImage.jpg')",
        "hero-ship": "url('/possibleBackgroundImage.jpg')",
        carousel1: "url('/carousel.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
