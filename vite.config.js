import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Netlify expects this
  },
  server: {
    port: 3000,
  },
});
// This configuration sets up Vite for a React project, specifying the output directory for builds