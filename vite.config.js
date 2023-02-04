import { defineConfig } from "vite";
import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/lib/index.jsx"),
      name: "Image Gallery React",
      fileName: (format) => `image-gallery.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  test: {
    globals: false,
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts}"],
  },
  plugins: [
    react(),
    svgr(),
    replace({
      "import.meta.vitest": "undefined",
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/lib/assets"),
      components: path.resolve(__dirname, "./src/lib/components"),
      constants: path.resolve(__dirname, "./src/lib/constants"),
      helpers: path.resolve(__dirname, "./src/lib/helpers"),
      hooks: path.resolve(__dirname, "./src/lib/hooks"),
      proptypes: path.resolve(__dirname, "./src/lib/proptypes"),
      styles: path.resolve(__dirname, "./src/lib/styles"),
    },
  },
});
