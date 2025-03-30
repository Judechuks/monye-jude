import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import process from "node:process"; // to ingnore the 'process not defined error'

// vitejs.dev/config/ - to allow env import using vite
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: { "process.env": env },
    plugins: [react()],
  };
});

// Default setting
/* export default defineConfig({
  plugins: [react()],
}); */
