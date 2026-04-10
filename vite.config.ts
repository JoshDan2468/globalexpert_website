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
      compress: {
        drop_console: true,
        passes: 2,
        pure_funcs: ["console.log", "console.warn"],
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor": ["react", "react-dom", "react-router-dom"],
          "animations": ["framer-motion"],
          "charts": ["recharts"],
        },
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          parser: "postcss",
        },
      },
      minify: true,
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
    // Optimize build output
    target: "ES2020",
    sourcemap: false,
    // Reduce bundle size by not including unused dependencies info
  },
});