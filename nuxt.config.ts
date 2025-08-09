import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@sidebase/nuxt-auth"],
  fonts: {
    provider: "fontshare",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  auth: {
    isEnabled: true,
    cookieName: "auth_token",
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        getSession: { path: "/session", method: "get" },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
});
