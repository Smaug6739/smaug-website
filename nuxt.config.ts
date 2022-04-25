import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  target: "server",
  app: {
    head: {
      title: "Smaug#6739",
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [

        { name: "robots",  content: "follow, index" },
        { name: "theme-color",  content: "#0e0c0c" },
        { name: "description",  content:    "Hi, I'm Smaug6739, full-stack developer from France, I develop also software and diffrent libraries." },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Smaug6739" },
        { property: "og:description", content: "Hi, I'm Smaug6739, full-stack developer from France, I develop also software and diffrent libraries."},
        { property: "og:url",  content: `https://smaug-6739.com` },
        { property: "og:keywords",  content: "Developer, Full-Stack, Software, Smaug6739" },
        { property: "og:image",  content: `https://smaug-6739.com/seo/img.png` },

        // Twitter
        { name: "twitter:title",  content: `Smaug6739` },
        { name: "twitter:creator",  content: `Smaug6739` },
        { name: "twitter:site",  content: `https://smaug-6739.com` },
        { name: "twitter:url",  content: `https://smaug-6739.com` },
        { name: "twitter:description",  content: `Hi, I'm Smaug6739, full-stack developer from France, I develop also software and diffrent libraries.` },
        { name: "twitter:card",  content: `summary_large_image` },
        { name: "twitter:image",  content: `https://smaug-6739.com/seo/img.png` },
      ],
    },
  },
});
