// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "nuxt-headlessui", "@nuxt/ui"],
  i18n: {
    seo: true,
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "english",
        dir: "ltr",
        iso: "en-US",
      },
      { code: "ar", file: "ar.json", name: "عربى", dir: "rtl", iso: "ar-sa" },
    ],
    langDir: "lang",
    lazy: true,
    defaultLocale: "ar",
    defaultDirection: "rtl",
    strategy: "prefix_and_default",
  },
  colorMode: {
    preference: "light",
  },
  ui: {
    global: true,
  },
  css: ["~/assets/css/app.css"],
});
