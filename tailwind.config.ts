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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2a5165",
          secondary: "#83A79B",
          accent: "#6bca8c",
          neutral: "#d1fae5",
          "base-100": "#d1fae5",
          info: "#06b6d4",
          success: "#a3e635",
          warning: "#fde047",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
