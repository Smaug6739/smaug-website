import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Smaug#6739",
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Hi, I'm Smaug#6739, full-stack developer from France, I develop also software and diffrent libraries.",
        },
        // Open Graph / Facebook
        {
          hid: "og:title",
          name: "og:title",
          content: "Smaug#6739",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Hi, I'm Smaug#6739, full-stack developer from France, I develop also software and diffrent libraries.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://smaug-6739.com`,
        },
        {
          hid: "og:keywords",
          name: "og:keywords",
          content: "Developer, Full-Stack, Software, Smaug#6739",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `/seo/img.png`,
        },

        // Twitter
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: `Smaug#6739`,
        },
        {
          hid: "twitter:creator",
          property: "twitter:creator",
          content: `Smaug#6739`,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://smaug-6739.com`,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: `Hi, I'm Smaug#6739, full-stack developer from France, I develop also software and diffrent libraries.`,
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: `summary_large_image`,
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: `/seo/img.png`,
        },
      ],
    },
  },
});
