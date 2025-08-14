import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  fonts: {
    provider: "fontshare",
  },
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  devServer: { host: process.env.TAURI_DEV_HOST || "localhost" },
  vite: {
    plugins: [tailwindcss()],
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      strictPort: true,
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
});

