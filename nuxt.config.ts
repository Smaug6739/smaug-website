import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  meta: [
    { charset: "utf-8" },
    {
      hid: "description",
      name: "description",
      content: "my website description",
    },
  ],
  target: "static",
  router: {
    base: "/smaug-website/",
  },
});
