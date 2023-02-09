import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "./index.jsx"),
      name: "Deadly Simple Image Gallery - demo",
      fileName: (format) => `deadly-simple-gallery.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      plugins: [],
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: false,
    environment: "jsdom",
    includeSource: ["./**/*.{js,ts}"],
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      constants: path.resolve(__dirname, "./src/constants"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      proptypes: path.resolve(__dirname, "./src/proptypes"),
      styles: path.resolve(__dirname, "./src/styles"),
    },
  },
});
