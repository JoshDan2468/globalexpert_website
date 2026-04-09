import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: { drop_console: true },
      mangle: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor": ["react", "react-dom", "react-router-dom"],
          "animations": ["framer-motion"],
        },
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          parser: "postcss",
        },
      },
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
  },
});