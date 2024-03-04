// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-delay-hydration",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Oswald: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    "nuxt-icon",
  ],
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
    mode: "mount",
  },
  shadcn: {
    prefix: "UI",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  nitro: {
    prerender: {
      routes: ["/", "/agents"],
    },
  },
});
