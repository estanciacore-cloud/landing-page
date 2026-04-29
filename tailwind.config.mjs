import defaultTheme from "tailwindcss/defaultTheme";
import fluidType from "tailwindcss-fluid-type";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        corporate: {
          DEFAULT: "#1e3a5f",
          dark: "#0f2744",
          light: "#2d4a6f",
        },
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [fluidType],
};
