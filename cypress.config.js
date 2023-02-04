import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 768,
  viewportWidth: 1024,
  e2e: {
    specPattern: "cypress/e2e/*.cy.jsx",
    baseUrl: "http://localhost:5173/",
  },
  component: {
    specPattern: "cypress/component/**/*.cy.jsx",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
