import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";


//vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: { "process.env": env },
    plugins: [react()],
  };
});

/*
// Default setting
export default defineConfig({
  plugins: [react()],
});
*/