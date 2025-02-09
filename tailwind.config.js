/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-gray": "#F3F4F6",
        "custom-black": "#111827",
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false, // <== disable this!
  // },
};
