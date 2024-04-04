// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "dayjs-nuxt",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
  ],
  shadcn: {
    prefix: "Ui",

    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  pages: true,
});
