import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src")
      }
    },
    define: {
      BUILD_VARIANT_SHOULD_BE_REPLACED: JSON.stringify(mode)
    },
    plugins: [react(), checker({ typescript: true })]
  };
});
