import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "html"],
      reportsDirectory: ".coverage",
      thresholds: {
        statements: 1,
        branches: 1,
        functions: 1,
        lines: 1,
      },
    },
  },
});

