// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxt/image",
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
});
