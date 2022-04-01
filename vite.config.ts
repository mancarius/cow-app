import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const pwaOptions: Partial<VitePWAOptions> = {
  workbox: {
    sourcemap: true,
  },
  devOptions: {
    enabled: process.env.SW_DEV === "true",
    type: "module",
    navigateFallback: "index.html",
  },
  includeAssets: [
    "assets/favicon.ico",
    "assets/robots.txt",
    "assets/apple-touch-icon.png",
  ],
  manifest: {
    name: "Cow",
    short_name: "Cow",
    description: "Description of your app",
    theme_color: "#ffffff",
    icons: [
      {
        src: "assets/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "assets/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === "true",
  },
  plugins: [react(), VitePWA(pwaOptions)],
});
