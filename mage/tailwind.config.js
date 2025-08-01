import { resolveProjectPath } from "wasp/dev";

/** @type {import('tailwindcss').Config} */
export default {
  content: [resolveProjectPath("./src/**/*.{js,jsx,ts,tsx}")],
  theme: {
    extend: {
      keyframes: {
        jumping: {
          "0%, 25%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-7px)" },
          "30%": { transform: "translateY(0)" },
        },
      },
      animation: {
        jumping: "jumping 3s ease infinite",
      },
    },
  },
  plugins: [],
};
