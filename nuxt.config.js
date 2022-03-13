export default {
  target: "static",
  generate: {
    fallback: true,
  },
  head: {
    title: "Julia @ Aircall",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/styles/main.scss"],

  styleResources: {
    scss: ["~/assets/styles/_variables.scss"],
  },

  plugins: ["~plugins/filters.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components", "~/components/blog"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    display: "swap",
    families: {
      "Open+Sans": [400, 500, 600],
    },
  },

  modules: ["@nuxtjs/i18n", "@nuxtjs/style-resources"],

  i18n: {
    detectBrowserLanguage: false, // because translations are not done
    locales: [
      { code: "en", file: "en.js", name: "english" },
      { code: "fr", file: "fr.js", name: "french" },
    ],
    langDir: "lang/",
    defaultLocale: "en",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
