// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-headlessui"],
  i18n: {
    locales: [
      { code: "ar", file: "ar.json", name: "english" },
      { code: "en", file: "en.json", name: "عربى" },
    ],
    langDir: "lang",
    lazy: true,
    defaultLocale: "en",
    strategy: "no_prefix",
  },
});
