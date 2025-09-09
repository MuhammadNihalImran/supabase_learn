import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/todos": {
        target: "https://supabase-learn-p15g.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
