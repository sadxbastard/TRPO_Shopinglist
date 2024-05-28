import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const backend = "https://localhost:9051";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 5173,
      proxy: {
        "^/ShoppingList": {
          target: mode == "development" ? backend : 'http://backend:8080',
          ws: false,
          secure: false,
        },
      },
    },
  };
});
