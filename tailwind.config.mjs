/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cutive: ['"Cutive"', ...defaultTheme.fontFamily.sans],
        chivo: ['"Chivo"', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',  // Set to 1280px instead of the default 1536px
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
