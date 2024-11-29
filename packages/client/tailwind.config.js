/** @type {import('tailwindcss').Config} */
import tailwindBase from "@resource/common/tailwind.config";

export default {
  ...tailwindBase,
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../node_modules/@resource/common/**/*.{js,jsx,ts,tsx}"
  ]
};
